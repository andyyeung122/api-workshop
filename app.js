require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const books = require('./routes/books');

// defining endpoints
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/books', books);
app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});