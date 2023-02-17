const { Schema } = require('mongoose')

const cardSchema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    power: { type: String, required: true },
    ability: { type: String, required: true },
    ability_id: { type: Schema.Types.ObjectId, ref: 'ability' },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = cardSchema
