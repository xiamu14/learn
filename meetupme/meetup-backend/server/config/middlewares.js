import bodyParser from 'body-parser'
import morgan from 'morgan'

export default (app) => {
    app.use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: false }))
        .use(morgan('dev'))
}
