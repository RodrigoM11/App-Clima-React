import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client';
import { App } from './App'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { CoordenadasProvider } from './context';
import context from './contextAuth';


const httpLink = createHttpLink({
  uri: 'https://apiweather-pied.vercel.app/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});


ReactDOM.render(
  <context.Provider>
    <CoordenadasProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </CoordenadasProvider>
  </context.Provider>,
  document.getElementById('app')
)

