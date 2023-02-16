const express = require('express')
//const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { default: mongoose } = require('mongoose')
require('dotenv/config')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { Card } = require('./models')
const { Ability } = require('./models')
const { Deck } = require('./models')
// require() imports and middleware here ^

// const PORT = process.env.PORT || 3023;

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
// app.use(express.static(`${__dirname}/client/build`))
// app.use() middleware here ^

// app.use('/api')
// app.use(routes)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// DB CONNECTION //
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/cards', async (req, res) => {
  const cards = await Card.find({})
  res.json(cards)
})

app.get('/abilities', async (req, res) => {
  const abilities = await Ability.find({})
  res.json(abilities)
})

app.get('/decks', async (req, res) => {
  const decks = await Deck.find({})
  res.json(decks)
})

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
