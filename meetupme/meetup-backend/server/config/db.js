import mongoose from 'mongoose'

export default () => {
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://127.0.0.1/meetupME', { useMongoClient: true })
    mongoose.connection
        .once('open', () => console.log('Mongodb runing'))
        .on('error', err => console.error(err))
}
