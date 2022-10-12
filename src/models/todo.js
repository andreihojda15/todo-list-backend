const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is missing'],
    unique: true,
  },
})

const Todo = new mongoose.model('Todo', TodoSchema);

module.exports = Todo;