import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Endereço do Gerente",
        description: "O gerente criou esta campanha e pode criar requisições para retirada de fundos.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Contribuição Mínima (wei)",
        description: "Você deve contribuir com pelo menos esta quantia de wei para se tornar um contribuidor."
      },
      {
        header: requestsCount,
        meta: "Número de Requisições",
        description: "Uma requisição tenta retirar fundos da campanha. As requisições devem ser aprovadas pela maioria dos contribuidores."
      },
      {
        header: approversCount,
        meta: "Número de Contribuidores",
        description: "Número de pessoas que já contribuiram para esta campanha."
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Saldo da Campanha (ether)",
        description: "O saldo é a quantia de dinheiro restante que esta campanha tem para gastar."
      }
    ]

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Detalhes da Camapanha</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>Ver Requisições</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout >
    );
  }
}

export default CampaignShow;