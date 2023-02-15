const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Type = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('type', Type)
