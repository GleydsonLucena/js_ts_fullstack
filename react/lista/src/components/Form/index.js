import React from 'react'
import "./Form.css";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Form( { handleChange,handleSubmit,novaTarefa }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input
        placeholder="Digite algo:"
        value={novaTarefa}
        onChange={handleChange}
        type="text" />
      <button type="submit">
        Enviar <FontAwesomeIcon icon={faShareFromSquare} />
      </button>
    </form>
  )
}

Form.PropsTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
