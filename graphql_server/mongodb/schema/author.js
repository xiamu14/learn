const { Schema } = require('mongoose');


const authorSchema = new Schema({
  name: String,
  books: [string],
});

module.exports = authorSchema
