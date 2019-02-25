import React, { Component } from 'react';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

import client from './graphql';
import './App.css';

class App extends Component {

  ExchangeRates = () => (
    <Query
      query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>{currency}: {rate}</p>
          </div>
        ));
      }}
    </Query>
  );

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {this.ExchangeRates()}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
