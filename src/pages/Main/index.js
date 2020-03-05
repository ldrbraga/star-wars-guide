import React, { Component } from 'react';

import { FaJedi, FaSearch } from 'react-icons/fa';

import { Container, Form, SelectOptions, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newSearch: '',
  };

  handleInputChange = e => {
    this.setState({ newSearch: e.target.value });

    console.log(this.state.newSearch);
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.newSearch);
  }

  render() {
    const { newSearch } = this.state;

    return (
      <Container>
        <h1>
          <FaJedi />
          Guia Star Wars
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={newSearch}
            onChange={this.handleInputChange}
          />

          <SelectOptions>
            <option value="movie">Filme</option>
            <option value="people">Personagem</option>
          </SelectOptions>

          <SubmitButton>
            <FaSearch color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
