const Card = require('../models/card')
const Type = require('../models/type')
const Deck = require('../models/deck')

const getAllTypes = async (req, res) => {
  try {
    const types = await type.find()
    return res.status(200).json({ types })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTypeById = async (req, res) => {
  try {
    const { id } = req.params
    const type = await Type.findById(id)
    if (type) {
      return res.status(200).json({ type })
    }
    return res.status(404).send('type with the specified ID dos not exist')
  } catch (error) {
    return res.status(500), send(error.message)
  }
}

const updateType = async (req, res) => {
  try {
    const type = await Type.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(type)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const editType = async (req, res) => {
  try {
    const id = req.params.id
    await Character.updateOne({ _id: id }, req.body)
    return res.status(200).send('Successfully Edited')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createType = async (req, res) => {
  try {
    const type = await new Type(req.body)
    await type.save()
    return res.status(201).json({
      type
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteType = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Type.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Type deleted')
    }
    throw new Error('Type not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
