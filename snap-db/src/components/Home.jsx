import React from 'react'
import { useState,  } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import Search from '../components/Search'
import AbilityDetails from './AbilityDetails'
import ImageSlider from './ImageSlider'
import { SliderImages } from './SliderImages'
import AbilityList from './AbilityList'

const Home = (props) => {

  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const searchOnChange = (e) => {
    const value = e.target.value
    console.log(value)
    setSearchQuery(value)
  }

  const searchOnSubmit = function (e)  {
    const abilities = props.abilities
    let results = abilities.filter((ability) => {
      return ability.toLowerCase().includes(searchQuery.toLowerCase())
    })
    console.log(results)

    setSearchResults(results)
  }

  let navigate = useNavigate()

  const showAbilities = (abilities) => {
    navigate(`abilities/${abilities._id}`)
  }

  return (
    <div className="home">
      <h1>Search Abilities!</h1>
      <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/>
      <div className="search">
        <h3>Showing Results for: {searchQuery}</h3>
        <section className="search-results container-grid">
          {searchResults.map((result) => {
            return <AbilityDetails key={result._id} onClick={() => showAbilities(result)} image={result.image} name={result.name} />

          })}
        </section>

      </div>
      
      </div>
  )
}

export default Home