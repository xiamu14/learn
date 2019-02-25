const { model } = require('mongoose')
const bookSchema = require('../schema/book')

const Book = model('Book', bookSchema)

module.exports = Book
