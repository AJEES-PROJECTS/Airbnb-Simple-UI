import React from 'react'
import image1 from "../images/airbnb-logo.png"
import '../App.css'

function Navbar() {
  return(
    <nav className="airbnb-text" >
     <img src= {image1} className="logo" />
      <h4 >airbnb</h4>
    </nav>
  )

}
export default Navbar;
