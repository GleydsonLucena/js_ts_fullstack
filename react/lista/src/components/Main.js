import React, { Component } from "react";
import "./Main.css";

//form

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'


export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  }

  render() {
    const { novaTarefa } = this.state;

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
      </div>
    )
  }
}
