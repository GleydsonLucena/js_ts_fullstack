import React, { Component } from "react";

import "./Main.css";
import Form from "./Form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if(!tarefas) return;

    this.setState( { tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    if (novaTarefa === '') return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        dataSave: [...novasTarefas],
        novaTarefa: ''
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      });
    }
  }

  handleChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        novaTarefa={novaTarefa}
        />

        <ul className="tarefas">
          {tarefas.map((tarefa, index) =>
          (

            <li key={tarefa}>

              {tarefa}
              <div className="btn-tarefas">
                <button
                  onClick={(e) => this.handleEdit(e, index)}
                  type="button"> <FontAwesomeIcon
                    icon={faPenToSquare} /></button>
                <button
                  onClick={(e) => this.handleDelete(e, index)}
                  type="button"> <FontAwesomeIcon
                    icon={faTrashCan} /></button>
              </div>

            </li>

          ))}

        </ul>

      </div>
    )
  }
}
