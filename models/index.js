const mongoose = require('mongoose')
const cardSchema = require('./card')
const abilitySchema = require('./ability')
const deckSchema = require('./deck')

const Card = mongoose.model('Card', cardSchema)
const Ability = mongoose.model('Ability', abilitySchema)
const Deck = mongoose.model('Deck', deckSchema)

module.exports = {
  Card,
  Ability,
  Deck
}
