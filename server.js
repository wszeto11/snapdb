const express = require('express')
const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')
const cors = require('cors')
// const controllers = require('./controllers')
// const { MongoClient } = require('mongodb')
// const { Card } = require('./models')
// const { Ability } = require('./models')
// const { Deck } = require('./models')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(`${__dirname}/client/build`))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// DB CONNECTION //
mongoose
  .connect('mongodb://127.0.0.1:27017/db')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
//const db = mongoose.connection

module.exports = db
// .connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('DB connected')
// })
// .catch((err) => {
//   console.log(err)
// })

// Routes

// app.get('/*', (req, res) => {
//   res.sendFile(`${__dirname}/client/build/index.html`)
// })
app.get('/', (req, res) => {
  res.send('SNAP DB!')
})

app.get(
  '/middleware',
  (req, res, next) => {
    console.log('this is middleware')
    next()
  },
  (req, res) => {
    res.send('response completed')
  }
)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
