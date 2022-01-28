import "./App.css";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import Characters from "./containers/Characters";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import CharacterDetails from "./containers/CharacterDetails";
import Search from "./containers/Search";

// import logo from './logo.svg';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
            <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/search" element={<Search />} />
            <Route path="/:id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
