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
      name: 'Debrii',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/debrii.webp?v=39',
      description: 'Add a Rock to each other location, for both players.'
    },
    {
      name: 'Destroyer',
      cost: '6',
      power: '15',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/destroyer.webp?v=39',
      description: 'Destroy your other cards.'
    },
    {
      name: 'Doctor Doom',
      cost: '6',
      power: '5',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/doctor-doom.webp?v=39',
      description: 'Add a 5-Power DoomBot to each other location.'
    },
    {
      name: 'Doctor Octopus',
      cost: '5',
      power: '10',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/doctor-octopus.webp?v=39',
      description:
        'Pull 4 random cards from your opponent’s hand to their side of this location.'
    },
    {
      name: 'Doctor Strange',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/doctor-strange.webp?v=39',
      description: 'Move your highest Power cards to this location.'
    },
    {
      name: 'Drax',
      cost: '4',
      power: '5',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/drax.webp?v=39',
      description: 'If your opponent played a card here this turn, +3 Power.'
    },
    {
      name: 'Electro',
      cost: '3',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/electro.webp?v=39',
      description: '+1 Max Energy. Ongoing: You can only play 1 card a turn.'
    },
    {
      name: 'Elektra',
      cost: '1',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/elektra.webp?v=39',
      description: 'Destroy a random enemy 1-Cost card at this location.'
    },
    {
      name: 'Enchantress',
      cost: '4',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/enchantress.webp?v=39',
      description:
        'Remove the abilities from all Ongoing cards at this location.'
    },
    {
      name: 'Falcon',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/falcon.webp?v=39',
      description: 'Return your 1-Cost cards to your hand.'
    },
    {
      name: 'Forge',
      cost: '2',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/forge.webp?v=39',
      description: 'Give the next card you play +2 Power.'
    },
    {
      name: 'Galactus',
      cost: '6',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/galactus.webp?v=39',
      description:
        'If this is your only card here, destroy all other locations.'
    },
    {
      name: 'Gambit',
      cost: '3',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/gambit.webp?v=39',
      description: 'Discard a card from your hand. Destroy a random enemy card.'
    },
    {
      name: 'Gamora',
      cost: '5',
      power: '7',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/gamora.webp?v=39',
      description: 'If your opponent played a card here this turn, +5 Power.'
    },
    {
      name: 'Ghost Rider',
      cost: '4',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ghost-rider.webp?v=39',
      description: 'Bring back one of your discarded cards to this location.'
    },
    {
      name: 'Green Goblin',
      cost: '3',
      power: '-3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/green-goblin.webp?v=39',
      description: 'Your opponent gains control of this.'
    },
    {
      name: 'Groot',
      cost: '3',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/groot.webp?v=39',
      description: 'If your opponent played a card here this turn, +2 Power.'
    },
    {
      name: 'Hawkeye',
      cost: '1',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hawkeye.webp?v=39',
      description: 'If you play a card here next turn, +2 Power.'
    },
    {
      name: 'Hazmat',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hazmat.webp?v=39',
      description: 'Afflict all other cards with -1 Power.'
    },
    {
      name: 'Heimdall',
      cost: '6',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/heimdall.webp?v=39',
      description: 'Move your other cards one location to the left.'
    },
    {
      name: 'Hela',
      cost: '6',
      power: '6',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hela.webp?v=39',
      description:
        'Play all cards you discarded from your hand to random locations.'
    },
    {
      name: 'Hellcow',
      cost: '4',
      power: '6',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hellcow.webp?v=39',
      description: 'Discard 2 cards from your hand,'
    },
    {
      name: 'Hobgoblin',
      cost: '5',
      power: '-8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hobgoblin.webp?v=39',
      description: 'Your opponent gains control of this.'
    },
    {
      name: 'Hulkbuster',
      cost: '3',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/hulk-buster.webp?v=39',
      description:
        'Merge this card with a random friendly card at this location.'
    },
    {
      name: 'Iceman',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/iceman.webp?v=39',
      description:
        "Give a random card in your opponent's hand +1 Cost. (maximum 6)"
    },
    {
      name: 'Iron Fist',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/iron-fist.webp?v=39',
      description:
        'Move the next card you play one location to the left after it reveals.'
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
      type_id: ongoing[0]._id,
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
