import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardList = (props) => {

  let navigate = useNavigate();
  const showCard = (card) => {
    navigate(`${card._id}`);
  };

  return (
    <div className="ability-grid">
      {props.cards.map((card) => (
        <div className="tile" onClick={() => showCard(card)} key={card._id}>
        <h3>{card.name}</h3>
        <h3>{card.image}</h3>
        </div>
      ))}
    </div>
  )
}

export default CardList;