const { Schema } = require('mongoose')

const Deck = new Schema(
  {
    name: { type: String, required: false },
    image: { type: String, required: false },
    cards: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Deck
