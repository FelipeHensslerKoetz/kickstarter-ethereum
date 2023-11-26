import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";

class ContributeForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Quantia para Contribuição</label>
          <Input 
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary>
          Contribuir
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;