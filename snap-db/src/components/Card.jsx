import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CardList = () => {

  let navigate = useNavigate();
  const showCard = (card) => {
    navigate(`${card._id}`);
  };

  const [cards, setCards] = useState([])

  const getCards = async() => {
    const cardList = await axios.get('http://localhost:3001/api/cards')
    setCards(cardList.data.card)
    console.log(cardList)
  }

  useEffect(() => {
    getCards()
  },[])

  return (
    <div className="ability-grid">
      {cards.map((card) => (
        <div className="tile" onClick={() => showCard(card)} key={card._id}>
        <h3>{card.name}</h3>
        <h3>{card.image}</h3>
        </div>
      ))}
    </div>
  )
}

export default CardList;