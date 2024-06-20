import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Menu = () => {
  return (
    <nav className='menu'>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

    </nav>
  )
}

export default Menu
