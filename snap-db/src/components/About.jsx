import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AbilityDetails from './AbilityDetails'
import AbilityList from './AbilityList'
import ImageSlider from './ImageSlider'

import { SliderData } from './SliderData'
const About = (props) => {
  return (
    <div>
      <div className="img-wrapper">
        <ImageSlider slides={SliderData} />
      </div>
    </div>
  )
}

export default About
