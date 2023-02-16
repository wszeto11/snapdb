import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import AbilityDetails from './AbilityDetails'
// import AbilityList from './AbilityList'
import ImageSlider from './ImageSlider'

import { SliderImages } from './SliderImages'
const About = (props) => {
  return (
    <div>
      <div className="img-wrapper">
        <ImageSlider slides={SliderImages} />
      </div>
    </div>
  )
}

export default About
