const { Schema } = require('mongoose')

const Card = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    power: { type: String, required: true },
    ability_id: { type: Schema.Types.ObjectId, ref: 'ability_id' },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Card
