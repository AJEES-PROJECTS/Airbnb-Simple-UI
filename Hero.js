import React from 'react'
import heroimage from '../images/hero1.png'

function Hero() {
  return (
    <section className="hero">
     <img src = {heroimage} />
     <h1 className="hero-header">Online Experiences</h1>
     <p className="hero-text" > Join unique iteractive activities led by
     one-of-kinf hosts-all without leaving home.</p>
    </section>
  )


}
export default Hero;
