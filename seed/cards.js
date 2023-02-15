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
    // On Reveal
    {
      name: 'Absorbing Man',
      cost: '4',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/absorbing-man.webp?v=39',
      description:
        'If the last card you played has an On Reveal ability, this card copies it.'
    },
    {
      name: 'Aero',
      cost: '5',
      power: '7',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/aero.webp?v=39',
      description: 'Move all enemy cards played this turn to this location.'
    },
    {
      name: 'Agent 13',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/agent-13.webp?v=39',
      description: 'Add a random card to your hand.'
    },
    {
      name: 'Agent Coulson',
      cost: '3',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/agent-coulson.webp?v=39',
      description: 'Add a random 4-Cost and 5-Cost card to your hand.'
    },
    {
      name: 'Arnim Zola',
      cost: '6',
      power: '0',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/arnim-zola.webp?v=39',
      description:
        'Destroy a random friendly card here. Add copies of it to the other locations.'
    },
    {
      name: 'Baron Mordo',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/baron-mordo.webp?v=39',
      description: 'Your opponent draws a card. Set its Cost to 6.'
    },
    {
      name: 'Bast',
      cost: '1',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/bast.webp?v=39',
      description: 'Set the Power of all cards in your hand to 3.'
    },
    {
      name: 'Beast',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/beast.webp?v=39',
      description:
        'Return your other cards at this location to your hand. They cost 1 less.'
    },
    {
      name: 'Black Bolt',
      cost: '5',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/black-bolt.webp?v=39',
      description:
        'Your opponent must discard the lowest-Cost card in their hand.'
    },
    {
      name: 'Black Panther',
      cost: '5',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/black-panther.webp?v=39',
      description: 'Double this card’s Power.'
    },
    {
      name: 'Black Widow',
      cost: '2',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/black-widow.webp?v=39',
      description: "Add a Widow's Bite to your opponent’s hand."
    },
    {
      name: 'Blade',
      cost: '1',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/blade.webp?v=39',
      description: 'Discard a card from your hand.'
    },
    {
      name: 'Brood',
      cost: '3',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/brood.webp?v=39',
      description: 'Add 2 Broodlings to this location with the same Power.'
    },
    {
      name: 'Cable',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cable.webp?v=39',
      description: 'Put the bottom card of your opponent’s deck into your hand.'
    },
    {
      name: 'Carnage',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/carnage.webp?v=39',
      description: 'Destroy your other cards here. +2 Power for each destroyed.'
    },
    {
      name: 'Cloak',
      cost: '2',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cloak.webp?v=39',
      description: 'Next turn, both players can move cards to this location.'
    },
    {
      name: 'Colleen Wing',
      cost: '2',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/colleen-wing.webp?v=39',
      description: 'Discard the lowest-cost card from your hand.'
    },
    {
      name: 'Crystal',
      cost: '4',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/crystal.webp?v=39',
      description:
        'If this is at the middle location, shuffle your hand into your deck and draw 3 cards.'
    },
    {
      name: 'Deathlok',
      cost: '3',
      power: '5',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/deathlok.webp?v=39',
      description: 'Destroy your other cards at this location.'
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image: '',
      description: ''
    },

    // Ongoing
    {
      name: 'Cosmo',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cosmo.webp?v=39',
      description: 'On Reveal abilities won’t happen at this location.'
    },

    // No Ability
    {
      name: 'Abomination',
      cost: '5',
      power: '9',
      type: 'No Ability',
      type_id: noAbility[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/abomination.webp?v=39',
      description: 'Foolish rabble! You are beneath me!'
    },
    {
      name: 'Cyclops',
      cost: '3',
      power: '4',
      type: 'No Ability',
      type_id: noAbility[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cyclops.webp?v=39',
      description: 'Let’s move, X-Men.'
    },
    {
      name: 'Hulk',
      cost: '6',
      power: '12',
      type: 'No Ability',
      type_id: noAbility[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hulk.webp?v=39',
      description: 'HULK SMASH!'
    },
    {
      name: 'Misty Knight',
      cost: '1',
      power: '2',
      type: 'No Ability',
      type_id: noAbility[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/misty-knight.webp?v=39',
      description: "We've got to save this city."
    },
    {
      name: 'Shocker',
      cost: '1',
      power: '3',
      type: 'No Ability',
      type_id: noAbility[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/shocker.webp?v=39',
      description: "I'm gonna blast you!"
    },
    {
      name: 'Thing',
      cost: '4',
      power: '6',
      type: 'No Ability',
      type_id: noAbility[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/the-thing.webp?v=39',
      description: "It's clobberin' time!"
    },
    {
      name: 'Wasp',
      cost: '0',
      power: '1',
      type: 'No Ability',
      type_id: noAbility[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wasp.webp?v=39',
      description: 'My secret power is that I get things done.'
    }

    // Discard

    // Move

    // Destroy
  ]

  await Card.insertMany(cards)
  console.log('Created cards with types!')
}
const run = async () => {
  await main()
  db.close()
}

run()
