const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/type_defs')
const resolvers = require('./graphql/resolvers')

require('./util/db_connect')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
