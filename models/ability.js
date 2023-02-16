const { Schema } = require('mongoose')

const Ability = new Schema(
  //const abilitySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Ability
