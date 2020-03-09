import React, { Component } from 'react';
import { FaJedi, FaSearch, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SelectOptions, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    search: '',
    select: 'films',
    loading: false,
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });

    console.log(this.state.search);
  };

  handleSelectChange = async e => {
    const { select } = this.state;
    this.setState({ select: e.target.value });

    console.log({select});
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { search } = this.state;

    const response = await api.get(`${search}`);

    console.log(response.data.results);

    this.setState({
      search: '',
      loading: false,
    });
  }

  render() {
    const { search, select, loading } = this.state;

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
            value={search}
            onChange={this.handleInputChange}
          />

          <SelectOptions onChange={this.handleSelectChange} value={select}>
            <option value="films">Filme</option>
            <option value="people">Personagem</option>
            <div>{`testando seleção: ${select}`}</div>
          </SelectOptions>

          <SubmitButton loading={loading}>
            { loading ? (<FaSpinner color="#fff" size={14} />) : (<FaSearch color="#fff" size={14} />) }
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
