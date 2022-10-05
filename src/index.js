const express = require('express');
const mongoose = require('mongoose')

const app = express();

const port = 3000

main = async () => {
  await mongoose.connect('mongodb://localhost:27017')
}

main().then(() => console.log('connected to mongodb')).catch(err => console.log(err))

app.get('/', (req, res) => {
  return res.send('hello from root');
})

app.listen(port, () => {
  console.log(`App listens on port ${port}`);
})
