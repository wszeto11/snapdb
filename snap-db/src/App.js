import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import AbilityList from './components/AbilityList'
import DeckForm from './components/Deck'
import AbilityDetails from './components/AbilityDetails'
import axios from 'axios'
import Card from './components/Card'
import CardDetails from './components/CardDetails'
import About from './components/About'

function App() {
  const [abilities, setAbility] = useState([])
  const [cards, setCards] = useState([])
  const [newAbility, setNewAbility] = useState({
    id: '',
    name: '',
    image: ''
  })

  // ABILITY API CALLS //
  const getAbilities = async () => {
    const abilityList = await axios.get('http://localhost:3001/api/abilities')
    console.log(abilityList.data.abilities)
    setAbility(abilityList.data.abilities)
  }
  // CARD API CALL //
  const getCards = async () => {
    const cardsList = await axios.get('http://localhost:3001/api/cards')
    console.log(cardsList)
    setCards(cardsList.data.card)
  }

  // CREATE DECKS CALL //
  const addAbility = (e) => {
    e.preventDefault()
    const currentAbility = abilities
    const createdAbility = {
      ...newAbility,
      id: parseInt(abilities.length + 1),
      name: parseInt(newAbility.name)
    }
    currentAbility.push(createdAbility)
    setAbility(currentAbility)
    setNewAbility({ name: '', image: '' })
  }
  const handleChange = (e) => {
    setNewAbility({ ...newAbility, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getAbilities()
    getCards()
    // addAbility
  }, [])

  return (
    <div className="App-header">
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home abilities={abilities} />} />
          <Route
            path="/abilities"
            element={
              <AbilityList abilities={abilities} newAbility={newAbility} />
            }
          />
          <Route
            path="/abilities/:id"
            element={
              <AbilityDetails
                abilities={abilities}
                getAbilities={getAbilities}
                cards={cards}
                getCards={getCards}
              />
            }
          />
          <Route path="/cards" element={<Card cards={cards} />} />
          <Route
            path="/cards/:id"
            element={<CardDetails cards={cards} getCards={getCards} />}
          />
          <Route
            path="/decks"
            element={
              <DeckForm
                newAbility={newAbility}
                handleChange={handleChange}
                addAbility={addAbility}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
