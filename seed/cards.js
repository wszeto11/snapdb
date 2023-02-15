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
    /* On Reveal * *************************************************************
     ****************************************************************************    */
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
      name: 'Ironheart',
      cost: '3',
      power: '0',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ironheart.webp?v=39',
      description: 'Give 3 other friendly cards +2 Power.'
    },
    {
      name: 'Jane Foster the Mighty Thor',
      cost: '5',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/jane-foster-mighty-thor.webp?v=39',
      description: 'Draw all cards that Cost 0 from your deck.'
    },
    {
      name: 'Jessica Jones',
      cost: '4',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/jessica-jones.webp?v=39',
      description: 'If you don’t play a card here next turn, +4 Power.'
    },
    {
      name: 'Jubilee',
      cost: '4',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/jubilee.webp?v=39',
      description: 'Play a card from your deck at this location.'
    },
    {
      name: 'Juggernaut',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/juggernaut.webp?v=39',
      description:
        'If your opponent played cards here this turn, move them randomly.'
    },
    {
      name: 'Kang',
      cost: '5',
      power: '0',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/kang.webp?v=39',
      description:
        'Look at what your opponent did, then restart the turn. (without Kang)'
    },
    {
      name: 'Killmonger',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/killmonger.webp?v=39',
      description: 'Destroy ALL 1-Cost cards.'
    },
    {
      name: 'Korg',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/korg.webp?v=39',
      description: "Shuffle a Rock into your opponent's deck."
    },
    {
      name: 'Lady Sif',
      cost: '3',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/lady-sif.webp?v=39',
      description: 'Discard the highest-cost card from your hand.'
    },
    {
      name: 'Leader',
      cost: '6',
      power: '7',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/leader.webp?v=39',
      description:
        'Copy all cards your opponent played to the location right of here, but on your side.'
    },
    {
      name: 'Leech',
      cost: '5',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/leech.webp?v=39',
      description:
        'Remove the abilities from all cards in your opponent’s hand.'
    },
    {
      name: 'Magik',
      cost: '5',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/magik.webp?v=39',
      description:
        "You can't play this on turn 6. On Reveal: Change this location to 'Limbo'."
    },
    {
      name: 'Magneto',
      cost: '6',
      power: '12',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/magneto.webp?v=39',
      description: 'Move all opposing 3 and 4-Cost cards to this location.'
    },
    {
      name: 'Mantis',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/mantis.webp?v=39',
      description:
        'If your opponent played a card here this turn, draw a card from their deck.'
    },
    {
      name: 'Maria Hill',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/maria-hill.webp?v=39',
      description: 'Add a random 1-Cost card to your hand.'
    },
    {
      name: 'Maximus',
      cost: '3',
      power: '7',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/maximus.webp?v=39',
      description: 'Your opponent draws 2 cards.'
    },
    {
      name: 'Medusa',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/medusa.webp?v=39',
      description: 'If this is at the middle location, +2 Power.'
    },
    {
      name: 'Mister Negative',
      cost: '4',
      power: '-1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/mister-negative.webp?v=39',
      description: 'Swap the Power and Cost of all cards in your deck.'
    },
    {
      name: 'Mister Sinister',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/mister-sinister.webp?v=39',
      description: 'Add a Sinister Clone to this location with the same Power.'
    },
    {
      name: 'Modok',
      cost: '5',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/modok.webp?v=39',
      description: 'Discard your hand.'
    },
    {
      name: 'Moon Girl',
      cost: '4',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/moon-girl.webp?v=39',
      description: 'Duplicate your hand.'
    },
    {
      name: 'Moon Knight',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/moon-knight.webp?v=39',
      description: 'Discard a card from each player’s hand.'
    },
    {
      name: 'Morph',
      cost: '3',
      power: '0',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/morph.webp?v=39',
      description: 'Become a copy of a random card in your opponent’s hand.'
    },
    {
      name: 'Mystique',
      cost: '3',
      power: '0',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/mystique.webp?v=39',
      description:
        'If the last card you played has an Ongoing ability, this card gains it.'
    },
    {
      name: 'Nakia',
      cost: '3',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/nakia.webp?v=39',
      description: 'Give the 2 leftmost cards in your hand +2 Power.'
    },
    {
      name: 'Nick Fury',
      cost: '5',
      power: '7',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/nick-fury.webp?v=39',
      description: 'Add 3 random 6-Cost cards to your hand.'
    },
    {
      name: 'Odin',
      cost: '6',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/odin.webp?v=39',
      description:
        'Activate the On Reveal abilities of your other cards at this location.'
    },
    {
      name: 'Polaris',
      cost: '3',
      power: '5',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/polaris.webp?v=39',
      description: 'Move an opposing 1 or 2-Cost card to this location.'
    },
    {
      name: 'Psylocke',
      cost: '2',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/psylocke.webp?v=39',
      description: 'Next turn, you get +1 Energy.'
    },
    {
      name: 'Quake',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/quake.webp?v=39',
      description:
        'If this is at the middle location, swap the positions of each location.'
    },
    {
      name: 'Rescue',
      cost: '4',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/rescue.webp?v=39',
      description: 'If you play a card here next turn, +5 Power.'
    },
    {
      name: 'Rhino',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/rhino.webp?v=39',
      description: 'Ruin this location. (remove its ability)'
    },
    {
      name: 'Rocket Raccoon',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/rocket-racoon.webp?v=39',
      description: 'If your opponent played a card here this turn, +2 Power.'
    },
    {
      name: 'Rock Slide',
      cost: '4',
      power: '6',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/rockslide.webp?v=39',
      description: 'Shuffle 2 Rocks into your opponent’s deck.'
    },
    {
      name: 'Rogue',
      cost: '3',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/rogue.webp?v=39',
      description:
        'Steal an Ongoing ability from a random enemy card at this location.'
    },
    {
      name: 'Sauron',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/sauron.webp?v=39',
      description:
        'Remove the abilities from all Ongoing cards in your hand and deck.'
    },
    {
      name: 'Scarlet Witch',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/scarlet-witch.webp?v=39',
      description: 'Replace this location with a random new one.'
    },
    {
      name: 'Scorpion',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/scorpion.webp?v=39',
      description: "Afflict cards in your opponent's hand with -1 Power."
    },
    {
      name: 'Sentinel',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/sentinel.webp?v=39',
      description: 'Add another Sentinel to your hand.'
    },
    {
      name: 'Sentry',
      cost: '4',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/sentry.webp?v=39',
      description:
        'Cannot be played at the right location. On Reveal: Add a -8 Power Void to the right location.'
    },
    {
      name: 'Shadow King',
      cost: '4',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/shadow-king.webp?v=39',
      description: 'Set all cards here to their original base Power.'
    },
    {
      name: 'Shang-Chi',
      cost: '4',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/shang-chi.webp?v=39',
      description:
        'Destroy all enemy cards at this location that have 9 or more Power.'
    },
    {
      name: 'Silver Surfer',
      cost: '3',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/silver-surfer.webp?v=39',
      description: 'Give your other 3-Cost cards +2 Power.'
    },
    {
      name: 'Shuri',
      cost: '4',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/shuri.webp?v=39',
      description: 'Double the Power of the next card you play.'
    },
    {
      name: 'Okoye',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/okoye.webp?v=39',
      description: 'Give every card in your deck +1 Power.'
    },
    {
      name: 'Spectrum',
      cost: '6',
      power: '5',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/spectrum.webp?v=39',
      description: 'Give your Ongoing cards +2 Power.'
    },
    {
      name: 'Spider-Man',
      cost: '4',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/spider-man.webp?v=39',
      description: "Your opponent can't play cards at this location next turn."
    },
    {
      name: 'Spider-Woman',
      cost: '5',
      power: '7',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/spider-woman.webp?v=39',
      description: 'Afflict all enemy cards here with -1 Power.'
    },
    {
      name: 'Squirrel Girl',
      cost: '1',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/squirrel-girl.webp?v=39',
      description: 'Add a 1-Power Squirrel to each other location.'
    },
    {
      name: 'Star-Lord',
      cost: '2',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/star-lord.webp?v=39',
      description: 'If your opponent played a card here this turn, +3 Power.'
    },
    {
      name: 'Storm',
      cost: '3',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/storm.webp?v=39',
      description:
        'Flood this location. Next turn is the last turn cards can be played here.'
    },
    {
      name: 'Sword Master',
      cost: '3',
      power: '6',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/sword-master.webp?v=39',
      description: 'Discard a card from your hand.'
    },
    {
      name: 'Taskmaster',
      cost: '5',
      power: '0',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/taskmaster.webp?v=39',
      description:
        "Set this card's Power equal to the Power of the last card you played."
    },
    {
      name: 'The Hood',
      cost: '1',
      power: '-2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/the-hood.webp?v=39',
      description: 'Add a Demon to your hand.'
    },
    {
      name: 'Thor',
      cost: '3',
      power: '4',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/thor.webp?v=39',
      description: 'Shuffle Mjolnir into your deck.'
    },
    {
      name: 'Ultron',
      cost: '6',
      power: '8',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ultron.webp?v=39',
      description: 'Create four 1-Power Drones at each other location.'
    },
    {
      name: 'Valkyrie',
      cost: '5',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/valkyrie.webp?v=39',
      description: 'Set ALL cards at this location to 3 Power.'
    },
    {
      name: 'Venom',
      cost: '3',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/venom.webp?v=39',
      description:
        'Destroy your other cards at this location. Add their Power to this card.'
    },
    {
      name: 'Viper',
      cost: '2',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/viper.webp?v=39',
      description:
        'Your opponent gains control of one of your other cards at this location.'
    },
    {
      name: 'Wave',
      cost: '3',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wave.webp?v=39',
      description: 'Next turn, cards in both players’ hands cost 4.'
    },
    {
      name: 'White Queen',
      cost: '4',
      power: '6',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/white-queen.webp?v=39',
      description:
        'Draw a copy of the highest Cost card in your opponent’s hand.'
    },
    {
      name: 'White Tiger',
      cost: '5',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/white-tiger.webp?v=39',
      description: 'Add a 7-Power Tiger to another location.'
    },
    {
      name: 'Wolfsbane',
      cost: '3',
      power: '1',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wolfsbane.webp?v=39',
      description: '+2 Power for each other card you have here.'
    },
    {
      name: 'Wong',
      cost: '4',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wong.webp?v=39',
      description: 'Your On Reveal abilities at this location happen twice.'
    },
    {
      name: 'Yellowjacket',
      cost: '0',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/yellowjacket.webp?v=39',
      description: 'Afflict your other cards at this location with -1 Power.'
    },
    {
      name: 'Yondu',
      cost: '1',
      power: '2',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/yondu.webp?v=39',
      description: "Remove the top card of your opponent's deck."
    },
    {
      name: 'Zero',
      cost: '1',
      power: '3',
      type: 'On Reveal',
      type_id: onReveal[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/zero.webp?v=39',
      description: 'Remove the abilities on the next card you play.'
    },

    /* Ongoing * ***************************************************************
     ****************************************************************************    */
    {
      name: 'Cosmo',
      cost: '3',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cosmo.webp?v=39',
      description: "On Reveal abilities won't happen at this location."
    },
    {
      name: 'Armor',
      cost: '2',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/armor.webp?v=39',
      description: "Cards at this location can't be destroyed."
    },
    {
      name: 'Blue Marvel',
      cost: '5',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/blue-marvel.webp?v=39',
      description: 'Your other cards have +1 Power.'
    },
    {
      name: 'Captain America',
      cost: '3',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/captain-america.webp?v=39',
      description: 'Your other cards at this location have +1 Power.'
    },
    {
      name: 'Cerebro',
      cost: '3',
      power: '0',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/cerebro.webp?v=39',
      description: 'Your highest Power cards get +2 Power.'
    },
    {
      name: 'Colossus',
      cost: '2',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/colossus.webp?v=39',
      description: "Can't be destroyed, moved, or have its Power reduced."
    },
    {
      name: 'Dazzler',
      cost: '4',
      power: '4',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/dazzler.webp?v=39',
      description: 'If you have 4 cards at each location, +6 Power.'
    },
    {
      name: 'Devil Dinosaur',
      cost: '5',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/devil-dinosaur.webp?v=39',
      description: '+2 Power for each card in your hand.'
    },
    {
      name: 'Ebony Maw',
      cost: '1',
      power: '7',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ebony-maw.webp?v=39',
      description:
        "You can't play this after turn 3. Ongoing: You can't play cards here."
    },
    {
      name: 'Goose',
      cost: '2',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/goose.webp?v=39',
      description:
        'Nobody can play cards that cost 4, 5, or 6 at this location.'
    },
    {
      name: 'Invisible Woman',
      cost: '2',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/invisible-woman.webp?v=39',
      description: 'Cards you play here are not revealed until the game ends.'
    },
    {
      name: 'Iron Man',
      cost: '5',
      power: '0',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/iron-man.webp?v=39',
      description: 'Your total Power is doubled at this location.'
    },

    {
      name: 'Ka-Zar',
      cost: '4',
      power: '4',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ka-zar.webp?v=39',
      description: 'Your 1-Cost cards have +1 Power.'
    },
    {
      name: 'Klaw',
      cost: '5',
      power: '4',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/klaw.webp?v=39',
      description: 'The location to the right has +6 Power.'
    },

    {
      name: 'Lizard',
      cost: '2',
      power: '5',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/lizard.webp?v=39',
      description: '-3 Power if your opponent has 4 cards here.'
    },
    {
      name: 'Luke Cage',
      cost: '2',
      power: '1',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/luke-cage.webp?v=39',
      description: "Your cards can't have their Power reduced."
    },
    {
      name: 'Mister Fantastic',
      cost: '3',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/mister-fantastic.webp?v=39',
      description: 'Adjacent locations have +2 Power.'
    },
    {
      name: 'Mojo',
      cost: '2',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/mojo.webp?v=39',
      description: 'If both players have 4 cards at this location, +6 Power.'
    },
    {
      name: 'Morbius',
      cost: '2',
      power: '0',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/morbius.webp?v=39',
      description: '+2 Power for each time you discarded a card this game.'
    },
    {
      name: 'Namor',
      cost: '4',
      power: '5',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/namor.webp?v=39',
      description: '+5 Power if this is your only card here.'
    },
    {
      name: 'Omega Red',
      cost: '4',
      power: '5',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/omega-red.webp?v=39',
      description:
        "If you're ahead by 10 Power here, +4 Power to other locations."
    },
    {
      name: 'Onslaught',
      cost: '6',
      power: '7',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/onslaught.webp?v=39',
      description: 'Double your other Ongoing effects at this location.'
    },
    {
      name: 'Orka',
      cost: '6',
      power: '9',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/orka.webp?v=39',
      description: '+5 Power if this is your only card here.'
    },
    {
      name: 'Patriot',
      cost: '3',
      power: '1',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/patriot.webp?v=39',
      description: 'Your cards with no abilities have +2 Power.'
    },

    {
      name: 'Professor X',
      cost: '5',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/professor-x.webp?v=39',
      description: 'Lock down this location.'
    },
    {
      name: 'The Punisher',
      cost: '3',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/punisher.webp?v=39',
      description: '+1 Power for each opposing card at this location.'
    },
    {
      name: 'Quinjet',
      cost: '1',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/quinjet.webp?v=39',
      description: 'Cards that didnt start in your deck cost 1 less.'
    },
    {
      name: 'Red Skull',
      cost: '5',
      power: '15',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/red-skull.webp?v=39',
      description: 'Enemy cards at this location have +2 Power.'
    },
    {
      name: 'Ronan the Accuser',
      cost: '5',
      power: '3',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/ronan-the-accuser.webp?v=39',
      description: "+2 Power for each card in your opponent's hand."
    },

    {
      name: 'Sandman',
      cost: '4',
      power: '1',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/sandman.webp?v=39',
      description: 'Players can only play 1 card a turn.'
    },
    {
      name: 'Sera',
      cost: '5',
      power: '4',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/sera.webp?v=39',
      description: 'Cards in your hand cost 1 less. (minimum 1)'
    },
    {
      name: 'Strong Guy',
      cost: '4',
      power: '4',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/strong-guy.webp?v=39',
      description: 'If your hand is empty, +6 Power.'
    },
    {
      name: 'Super Skrull',
      cost: '4',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/super-skrull.webp?v=39',
      description: 'Has the Ongoing effects of all enemy cards.'
    },
    {
      name: 'Typhoid Mary',
      cost: '4',
      power: '10',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/typhoid-mary.webp?v=39',
      description: 'Your other cards have -1 Power.'
    },
    {
      name: 'Warpath',
      cost: '4',
      power: '5',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/warpath.webp?v=39',
      description: 'If any of your locations are empty, +4 Power.'
    },
    {
      name: 'Wong',
      cost: '4',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wong.webp?v=39',
      description: 'Your On Reveal abilities at this location happen twice.'
    },

    {
      name: 'Zabu',
      cost: '2',
      power: '2',
      type: 'Ongoing',
      type_id: ongoing[0]._id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/zabu.webp?v=39',
      description: 'Your 4-Cost cards cost 1 less. (minimum 1)'
    },

    /* No Ability * ***************************************************************
     ****************************************************************************    */
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
    },

    /* Discard * ***************************************************************
     ****************************************************************************    */
    {
      name: 'Apocalypse',
      cost: '6',
      power: '8',
      type: 'Discard',
      type_id: discard[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/apocalypse.webp?v=39',
      description:
        'When you discard this from your hand, put it back with +4 Power.'
    },
    {
      name: 'Black Cat',
      cost: '3',
      power: '7',
      type: 'Discard',
      type_id: discard[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/black-cat.webp?v=39',
      description:
        'If this is in your hand at the end of your turn, discard it.'
    },
    {
      name: 'Dracula',
      cost: '4',
      power: '0',
      type: 'Discard',
      type_id: discard[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/dracula.webp?v=39',
      description:
        'At the end of the game, discard a card from your hand. This has its Power.'
    },
    {
      name: 'Helicarrier',
      cost: '6',
      power: '10',
      type: 'Discard',
      type_id: discard[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/helicarrier.webp?v=39',
      description:
        'When you discard this from your hand, add 3 random cards to your hand.'
    },
    {
      name: 'Swarm',
      cost: '2',
      power: '3',
      type: 'Discard',
      type_id: discard[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/swarm.webp?v=39',
      description:
        'When this is discarded from your hand, add two copies that Cost 0 to your hand.'
    },
    {
      name: 'Wolverine',
      cost: '2',
      power: '2',
      type: 'Discard',
      type_id: discard[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/wolverine.webp?v=39',
      description:
        'When this is discarded or destroyed, regenerate it at a random location with +2 Power.'
    },

    /* Move * ***************************************************************
     ****************************************************************************    */
    {
      name: 'Captain Marvel',
      cost: '5',
      power: '6',
      type: 'Move',
      type_id: move[0].id,
      image:
        'https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/captain-marvel.webp?v=39',
      description:
        'At the end of the game, move to a location that wins you the game. (If possible)'
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },
    {
      name: '',
      cost: '',
      power: '',
      type: 'Move',
      type_id: move[0].id,
      image: '',
      description: ''
    },

    /* Destroy * ***************************************************************
     ****************************************************************************    */
    {
      name: '',
      cost: '',
      power: '',
      type: 'Destroy',
      type_id: destroy[0].id,
      image: '',
      description: ''
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
