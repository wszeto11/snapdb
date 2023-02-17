const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deckSchema = new Schema(
  {
    name: { type: String, required: false },
    image: { type: String, required: false },
    cards: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Deck', deckSchema)
