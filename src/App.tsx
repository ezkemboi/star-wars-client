import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from './routes';
import MainContext, { IState, initialState } from './context';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache()
})

const App = () => {
  const [contextState, setContext ] = useState<IState>(initialState)
  const value = { contextState, setContext };
  return (
    <ChakraProvider>
      <MainContext.Provider value={value}>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </MainContext.Provider>
    </ChakraProvider>
  )
}

export default App;
