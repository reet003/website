import React from 'react'
import  './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='box container'>
      <div className='hero-text'>
        <h1>We ensure better education for the world</h1>
        <p>Education is a significant tool that provides knowledge, skill, technique, information and enables people to know their rights and duties towards their family, society and the nation. You can expand your vision and outlook to see the world around us. It changes our perception of life.</p>
        <button className='btn'>Explore more<img src={arrow}alt=''/></button>
      </div>

      
    </div>
  )
}

export default Hero
