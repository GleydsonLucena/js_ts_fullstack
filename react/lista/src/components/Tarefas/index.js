import React from "react";

import "./Tarefas.css";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Tarefas = ({ handleEdit, handleDelete, tarefas }) => {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) =>
      (

        <li key={tarefa}>

          {tarefa}
          <div className="btn-tarefas">
            <button
              onClick={(e) => handleEdit(e, index)}
              type="button"> <FontAwesomeIcon
                icon={faPenToSquare} /></button>
            <button
              onClick={(e) => handleDelete(e, index)}
              type="button"> <FontAwesomeIcon
                icon={faTrashCan} /></button>
          </div>

        </li>

      ))}

    </ul>
  )
}

Tarefas.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired
}

export default Tarefas

