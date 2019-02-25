const mongoose = require('mongoose')

const dbuser = 'graphql_server'

const dbpassword = 'graphql_server_1234'

mongoose.connect(`mongodb://${dbuser}:${dbpassword}@ds149365.mlab.com:49365/graphql_server`, { useNewUrlParser: true })

mongoose.connection.on('open', () => {
  console.log('mongodb is connecting')
})
