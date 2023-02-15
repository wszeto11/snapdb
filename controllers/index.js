const Card = require('../models/card')
const Type = require('../models/type')
const Deck = require('../models/deck')

const getAllTypes = async (req, res) => {}
try {
  const types = await type.find()
  return res.status(200).json({ types })
} catch (error) {
  return res.status(500).send(error.message)
}
