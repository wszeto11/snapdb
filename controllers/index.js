const Card = require('../models/card')
const Ability = require('../models/ability')
const Deck = require('../models/deck')

/* Ability Functions ************************************************************ */
const getAllAbilities = async (req, res) => {
  try {
    const abilities = await ability.find()
    return res.status(200).json({ abilities })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAbilityById = async (req, res) => {
  try {
    const { id } = req.params
    const ability = await Ability.findById(id)
    if (ability) {
      return res.status(200).json({ ability })
    }
    return res.status(404).send('ability with the specified ID dos not exist')
  } catch (error) {
    return res.status(500), send(error.message)
  }
}

const updateAbility = async (req, res) => {
  try {
    const ability = await Ability.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(ability)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editAbility = async (req, res) => {
  try {
    const id = req.params.id
    await Character.updateOne({ _id: id }, req.body)
    return res.status(200).send('Successfully Edited')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createAbility = async (req, res) => {
  try {
    const ability = await new Ability(req.body)
    await ability.save()
    return res.status(201).json({
      ability
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteAbility = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Ability.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ability deleted')
    }
    throw new Error('Ability not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

/* Card Functions ************************************************************ */
const getCardById = async (req, res) => {
  try {
    const { id } = req.params
    const card = await Card.findById(id)
    if (card) {
      return res.status(200).json({ card })
    }
    return res.status(404).send('Card with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllCards = async (req, res) => {
  try {
    const card = await Card.find()
    return res.status(200).json({ card })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCard = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Card.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Card deleted')
    }
    throw new Error('Card not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

/* Deck Functions ************************************************************ */
const createDeck = async (req, res) => {
  try {
    const deck = await new Deck(req.body)
    await deck.save()
    return res.status(201).json({
      ability // <--ability? or deck?
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllDecks = async (req, res) => {
  try {
    const deck = await Deck.find()
    return res.status(200).json({ deck })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllAbilities,
  getAbilityById,
  updateAbility,
  editAbility,
  createAbility,
  deleteAbility,
  getCardById,
  getAllCards,
  deleteCard,
  createDeck,
  getAllDecks
}
