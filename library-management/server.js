const express = require('express');
const books = require('./routes/books')
const app = express();

app.use('/books', books);

app.listen(3000);