import React from 'react'
import { useNav } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Ability } from '../../../models'

const AbilityList = () => {
  let nav = useNav()

  const showAbility = (ability) => {
    nav(`${ability._id}`)
  }

  const [abilities, setAbilites] = useState([])

  const getAbilities = async () => {
    const abilityList = await axios.get('http://localhost:3001/api/abilities')
    setAbilites(abilityList.data.abilities)
    console.log(abilityList)
  }

  useEffect(() => {
    getAbilities()
  }, [])

  return (
    <div className="ability-grid">
      {abilities.map((ability) => (
        <div
          className="tile"
          onClick={() => showAbility(ability)}
          key={ability._id}
        >
          <img
            className="ability-img"
            style={{ display: 'inline-block' }}
            src={ability.image}
            alt={ability.name}
          />
          <h3>{ability.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default AbilityList
