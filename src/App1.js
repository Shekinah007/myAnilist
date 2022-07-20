import React from "react";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import Home from "./Pages/Home";
import Test from "./Pages/Test";

function App() {
  // const client = new ApolloClient({
  //   uri: "https://graphql-weather-api.herokuapp.com/",
  //   cache: new InMemoryCache(),
  // });

  const client = new ApolloClient({
    // uri: "https://api.spacex.land/graphql/",
    // uri: "https://graphql.anilist.co/",
    uri: "https://graphql-weather-api.herokuapp.com/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Home />
      {/* <Test /> */}
    </ApolloProvider>
  );
}

export default App;
