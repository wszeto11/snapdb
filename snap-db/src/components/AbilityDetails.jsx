import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Update from './Update'

const AbilityDetails = (props) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [selectedAbility, setAbility] = useState('')
  const [selectedCards, setSelectedCards] = useState('')

  useEffect(() => {
    let selectedAbility = props.abilities.find((ability) => ability._id === id)
    setAbility(selectedAbility)
    console.log(selectedAbility)
  }, [props.abilities, id])

  const deleteAbility = async (id) => {
    await axios.delete(`http://localhost:3001/api/abilities/${id}`)
    alert('Ability was deleted!').then((res) => {
      navigate('/abilities')
    })
  }

  return selectedAbility ? (
    <div className="detail">
      <div className="detail-header">
        <h1>{selectedAbility.name}</h1>
        <img
          className="front-face"
          src={selectedAbility.image}
          alt={selectedAbility.name}
          width="400"
          height="400"
        />
      </div>
      <div>
        <button onClick={() => deleteAbility(id)}> Delete </button>
        <Update id={selectedAbility._id} />
      </div>
      <div className="info-wrapper">
        <div
          style={{
            display: 'inline-block',
            justifyContent: 'space-between',
            textAlign: 'center'
          }}
        >
          <h3>Description: {selectedAbility.description}</h3>
          <p style={{ marginLeft: '20%', marginRight: '20%' }}>
            {' '}
            {selectedAbility.description}
          </p>
          <Link to="/cards">
            <button>Cards</button>
          </Link>
        </div>
      </div>
    </div>
  ) : null
}

export default AbilityDetails
