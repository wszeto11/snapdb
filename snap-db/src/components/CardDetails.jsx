import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const CardDetails = (props) => {
  let { id } = useParams();

  const [selectedCard, setCard] = useState({});

  useEffect(() => {
    const selectedCard = props.cards.find(
      (cards) => cards._id === id
    )
    setCard(selectedCard)
      console.log(selectedCard)
  }, [props.cards, id]);

  const deleteCard = async (id) => {
    await axios.delete(`http://localhost:3001/api/cards/${id}`)
    alert("Card was deleted!")
  }

  return selectedCard ? (
    <div className="detail">
      <div className="detail-header">
        <h1>{selectedCard.ability}</h1>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "inline-block", justifyContent: "space-between", textAlign: "center" }}>
          <h3>{selectedCard.name}</h3>
          <h3>{selectedCard.cost}</h3>
          <h3>{selectedCard.power}</h3>
          <h3>{selectedCard.image}</h3>
          <h3>{selectedCard.description}</h3>
          <button onClick={()=>deleteCard(id)}> Delete </button>
        </div>
        <p>{selectedCard.card}</p>
      </div>
    </div>
  ) : null;
};

export default CardDetails;