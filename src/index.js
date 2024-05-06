import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import ContextProvider from './context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
      <ContextProvider>
      <App/>
      </ContextProvider>
    </ChakraProvider>
);

