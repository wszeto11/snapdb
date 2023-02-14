const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const Card = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    power: { type: String, required: true },
    ability: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('card', Card)
