import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Menu = () => {
  return (
    <nav className='menu'>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/post/10">Post 10</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
        <li><Link to="/101">Nova página</Link></li>
      </ul>

    </nav>
  )
}

export default Menu
