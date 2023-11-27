import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  render() {
    return (
      <Layout>
        <h3>Criar uma nova requisição</h3>
        <Form>
          <Form.Field>
            <label>Descrição</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Valor em Ether</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Endereço de Destino</label>
            <Input
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })}
            />
          </Form.Field>
          <Button primary>Criar</Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;