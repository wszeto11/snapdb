const mongoose = require('mongoose')
const CardSchema = require('./card')
const AbilitySchema = require('./ability')
const DeckSchema = require('./deck')

const Card = mongoose.model('Card', CardSchema)
const Ability = mongoose.model('Ability', AbilitySchema)
const Deck = mongoose.model('Deck', DeckSchema)

module.exports = {
  Card,
  Ability,
  Deck
}
