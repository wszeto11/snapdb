const db = require('../db')
const Deck = require('../models/deck.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const deck = [
    {
      name: '',
      image: '',
      cards: ''
    }
  ]

  await Deck.insertMany(deck)
  console.log('Created deck!')
}
const run = async () => {
  await main()
  db.close()
}

run()
