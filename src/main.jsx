import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createContext, useContext, useState } from 'react';

const client = new ApolloClient({
  uri: 'https://www.agrivestafrica.com/graphql/',
  cache: new InMemoryCache(),
});

const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
export const useLoader = () => {
  return useContext(LoaderContext);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
