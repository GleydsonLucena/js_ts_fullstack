import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ novaTarefa: event.target.value });
  }

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>{ novaTarefa }</h1>

        <form action="#" onSubmit={this.handleSubmit}>
          <input value={this.state.novaTarefa} onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
