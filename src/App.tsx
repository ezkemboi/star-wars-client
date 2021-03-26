import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from './routes';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default App;
