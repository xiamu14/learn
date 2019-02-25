const Book = require('../mongodb/model/book')

const resolvers = {
  Query: {
    books: async () => {
      const books = await Book.find()
      return books
    },
  },
  Mutation: {
    createBook: async (parent, args) => {
      const book = new Book(args.input)
      const res = await book.save()
      return res
    },
    deleteBook: async(parent, args) => {
      await Book.deleteMany(args.input)
      return {}
    }
  }
};

module.exports = resolvers
