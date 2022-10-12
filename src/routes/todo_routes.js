const Todo = require('../models/todo');
const express = require('express');
const server = express();

server.get('/todo', async (req, res) => {
  const Todos = Todo.find({});

  return res.status(200).send(JSON.stringify(Todos));
})

server.post('/todo', async (req, res) => {
  const todo = { ...req.body };
  const newTodo = new Todo({ ...todo });

  await newTodo.save(err => {
    if (err) {
      return res.status(500).send(err.errors.title.message);
    }
  });

  return res.status(200).json({
    ...todo,
  })
})

server.put('/todo/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  const body = { ...req.body };

  if(Object.keys(body).length === 0 || body.title.length === 0) {
    return res.status(500).json({
      msg: "The todo can't be empty",
    })
  }

  await Todo.findByIdAndUpdate(req.params.id, { ...body });

  return res.status(200).json({
    msg: "modified todo",
  })
})

server.delete('/todo/:id', async (req, res) => {
  const id = req.params.id;
  const findTodo = await Todo.findById(id);

  if (findTodo) {
    await Todo.deleteOne({ _id: id });
    return res.status(200).json({
      msg: "Deleted todo"
    });
  } else {
    return res.status(200).json({
      msg: "Couldn't find todo"
    })
  }
})

module.exports = server;