const db = require('../db')
const { Ability } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const abilities = [
    {
      name: 'On Reveal',
      description: 'Triggers when card is flipped on the board.'
    },
    {
      name: 'Ongoing',
      description: 'Has a continuous effect on the board.'
    },
    {
      name: 'No Ability',
      description: '"Vanilla" cards that have no abilities.'
    },
    {
      name: 'Discard',
      description: 'Cards that are removed from your hand are discarded.'
    },
    {
      name: 'Move',
      description: 'Moving from one location to another.'
    },
    {
      name: 'Destroy',
      description: 'Cards that removed from the board are destroyed.'
    }
  ]

  await Ability.insertMany(abilities)
  console.log('Created abilities')
}

const run = async () => {
  await main()
  db.close()
}

run()
