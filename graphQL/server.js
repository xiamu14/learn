import express from 'express'
import Schema from './src/schema'
import graphqlHTTP from 'express-graphql'

const app = express()
const port = 3002

app.use('/', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

let server = app.listen(port, function () {
    let addr = server.address();
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});