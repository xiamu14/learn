const { gql } = require('apollo-server')
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  input bookInput {
    title: String
    author: String
  }


  type Mutation {
    createBook(input: bookInput!): Book
    deleteBook(input: bookInput!): Book
  }

`;
module.exports = typeDefs
