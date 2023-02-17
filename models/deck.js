const { Schema } = require('mongoose')

const deckSchema = new Schema(
  {
    name: { type: String, required: false },
    image: { type: String, required: false },
    cards: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = deckSchema
