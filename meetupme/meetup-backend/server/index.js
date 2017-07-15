import express from 'express'
import dbConfig from './config/db'
import middlewareConfig from './config/middlewares'
import { MeetupRoutes } from './modules'
const app = express()

/**
 * database
 */

dbConfig()

/**
 * middleware
 */
middlewareConfig(app)

app.use('/api', [MeetupRoutes])

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    if (err) {
        console.err(err)
    } else {
        console.log(`App listen to port: ${PORT}`)
    }
})
