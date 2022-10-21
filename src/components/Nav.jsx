import React from "react";
import '../styles/Nav.css'
const logo = 'https://img.icons8.com/glyph-neue/64/FFFFFF/around-the-globe.png';

function Nav() {
  return (
    <div className="main--Div">
      <img src={logo}/>
      <h1>my travel journal</h1>
    </div>
  )
}

export default Nav;