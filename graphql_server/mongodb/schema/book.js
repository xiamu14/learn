const { Schema } = require('mongoose');


const bookSchema = new Schema({
  title: String,
  author: String,
});

module.exports = bookSchema
