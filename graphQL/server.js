import express from 'express'
import Schema from './src/schema'
import graphqlHTTP from 'express-graphql'

const app = express()
const port = 3002

app.use('/', graphqlHTTP({
    schema: Schema,
    graphiql: false
}));

let server = app.listen(port, function () {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}`: `port ${addr.port}`
    console.log('Listening on ' + bind);
});
