import React, { Component } from "react";
import "./Main.css";

//form

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

  handleChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input
            placeholder="Digite algo:"
            value={novaTarefa}
            onChange={this.handleChange}
            type="text" />
          <button type="submit">
            Enviar <FontAwesomeIcon icon={faShareFromSquare} />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) =>
          (

            <li key={tarefa}>

              <div className="btn-tarefas">
                {tarefa}
                <button type="button"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                <button type="button"> <FontAwesomeIcon icon={faTrashCan} /></button>
              </div>

            </li>

          ))}

        </ul>

      </div>
    )
  }
}
