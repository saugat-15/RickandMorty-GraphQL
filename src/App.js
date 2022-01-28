import './App.css';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import React from 'react';
import Characters from './containers/Characters';
import { BrowserRouter } from 'react-router-dom';
import {}
// import logo from './logo.svg';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
    <ApolloProvider client={client}>
      <div className="App">
        
        <Characters />
      </div>
      </ApolloProvider>
      </BrowserRouter>
  );
}

export default App;
