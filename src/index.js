const express = require('express');

const app = express();

const port = 3000

app.get('/', (req, res) => {
  return res.send('hello from root');
})

app.listen(port, () => {
  console.log(`App listens on port ${port}`);
})
