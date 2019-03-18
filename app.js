
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://127.0.0.1:27017/bookApi');
const port = process.env.PORT || 3002;
const Book = require('./models/bookModel');
// const Author = require('./models/authorRouter');
const bookRoouter = require('./routes/bookRouter')(Book);
// const authorRoouter = require('./routes/authorRouter')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRoouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
