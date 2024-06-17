import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange=(event)=> {
    this.setState({ novaTarefa: event.target.value });
  }

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit}>
          <input value={this.state.novaTarefa} onChange={this.handleChange} type="text" />
          <button type="submit"> Enviar
          </button>
        </form>
      </div>
    )
  }
}
