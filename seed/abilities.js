const db = require('../db')
const Ability = require('../models/')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const abilities = [
    {
      name: 'On Reveal',
      description: 'Triggers when card is flipped on the board.',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/silver-surfer.webp?v=39'
    },
    {
      name: 'Ongoing',
      description: 'Has a continuous effect on the board.',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wong.webp?v=39'
    },
    {
      name: 'No Ability',
      description: '"Vanilla" cards that have no abilities.',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cyclops.webp?v=39'
    },
    {
      name: 'Discard',
      description: 'Cards that are removed from your hand are discarded.',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ghost-rider.webp?v=39'
    },
    {
      name: 'Move',
      description: 'Moving from one location to another.',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/vision.webp?v=39'
    },
    {
      name: 'Destroy',
      description: 'Cards that removed from the board are destroyed.',
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/deadpool.webp?v=39'
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
