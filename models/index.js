const mongoose = require('mongoose')
const CardSchema = require('./card')
const TypeSchema = require('./type')

const Card = mongoose.model('card', CardSchema)
const Type = mongoose.model('type', TypeSchema)

module.exports = {
  Card,
  Type
}
