const express = require('express');
const mongoose = require('mongoose')
const todo = require('./routes/todo_routes');
const bodyParser = require('body-parser');

const app = express();

const port = 4000

main = async () => {
  await mongoose.connect('mongodb://localhost:27017/todoDB')
}

main().then(() => console.log('connected to mongodb')).catch(err => console.log(err))

app.use(bodyParser.json());
app.use('/api/', todo);

app.get('/', (req, res) => {
  return res.send('hello from root');
})

app.listen(port, () => {
  console.log(`App listens on port ${port}`);
})
