const db = require('../db')
const Type = require('../models/type')
const Card = require('../models/card')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const onReveal = await Type.find({ name: 'On Reveal' })
  const ongoing = await Type.find({ name: 'Ongoing' })
  const noAbility = await Type.find({ name: 'No Ability' })
  const discard = await Type.find({ name: 'Discard' })
  const move = await Type.find({ name: 'Move' })
  const destroy = await Type.find({ name: 'Destroy' })

  const cards = [
    // No Ability
    {
      name: 'Abomination',
      cost: [5],
      power: [9],
      type: 'No Ability',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/abomination.webp?v=39'
    }
  ]

  await Card.insertMany(cards)
  console.log('Created cards with types!')
}
const run = async () => {
  await main()
  db.close()
}

run()
