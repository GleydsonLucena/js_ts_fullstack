import React from 'react'
import "./style.css";
import { useLocation } from 'react-router-dom';

const About = () => {

  const { state } = useLocation();


  return (
    <div>
      <h1>
        <p>{state as string}</p>
      </h1>
    </div>
  )
}

export default About
