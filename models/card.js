const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const Card = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    power: { type: String, required: true },
    type: { type: String, required: true },
    type_id: { type: Schema.Types.ObjectID, ref: 'type' },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('card', Card)
