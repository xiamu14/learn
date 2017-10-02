import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './src/schema'

const app = express()
const port = 3002

app.use('/graphiql', graphqlHTTP({
    schema,
    graphiql: true
}));

let server = app.listen(port, function () {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}`: `port ${addr.port}`
    console.log('Listening on ' + bind);
});
