import React, { Component } from 'react';

import { FaJedi, FaSearch } from 'react-icons/fa';

import { Container, Form, SelectOptions, SubmitButton } from './styles';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h1>
          <FaJedi />
          Guia Star Wars
        </h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Pesquisar" />

          <SelectOptions>
            <option value="movie">Filme</option>
            <option value="people">Personagem</option>
          </SelectOptions>

          <SubmitButton disabled>
            <FaSearch color="##fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
