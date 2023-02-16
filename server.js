const express = require('express')
//const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const controllers = require('./controllers')
const { MongoClient } = require('mongodb')
const { Card } = require('./models')
const { Ability } = require('./models')
const { Deck } = require('./models')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
// app.use(express.static(`${__dirname}/client/build`))

// app.use('/api')

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

// Routes
app.get('/', (req, res) => {
  res.send('This is Snap!')
})

// Cards routes
app.get('/cards', async (req, res) => {
  const cards = await Card.find({})
  res.json(cards)
})

app.get('/cards/:id', async (req, res) => {
  try {
    const { id } = req.params
    const card = await Card.findById(id)
    if (!card) throw Error('Card not found')
    res.json(card)
  } catch (e) {
    console.log(e)
    res.send('Card not found!')
  }
})

app.delete('/cards/:id', controllers.deleteCard)

// Abilities routes
app.get('/abilities', async (req, res) => {
  const abilities = await Ability.find({})
  res.json(abilities)
})

app.get('/abilities/:id', async (req, res) => {
  try {
    const { id } = req.params
    const ability = await Ability.findById(id)
    if (!ability) throw Error('Ability not found')
    res.json(ability)
  } catch (e) {
    console.log(e)
    res.send('Ability not found!')
  }
})

app.delete('/abilities/:id', controllers.deleteAbility)

// Deck routes
app.get('/decks', async (req, res) => {
  const decks = await Deck.find({})
  res.json(decks)
})

app.get('/decks/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deck = await Deck.findById(id)
    if (!deck) throw Error('Deck not found')
    res.json(deck)
  } catch (e) {
    console.log(e)
    res.send('Deck not found!')
  }
})

app.delete('/abilities/:id', controllers.deleteAbility)
// const PORT = process.env.PORT || 3001
// app.get('/*', (req, res) => {
//   res.sendFile(`${__dirname}/client/build/index.html`)
// })
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
