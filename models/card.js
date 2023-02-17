const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    power: { type: String, required: true },
    ability: { type: String, required: true },
    ability_id: { type: Schema.Types.ObjectId, ref: 'Ability' },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Card', cardSchema)
