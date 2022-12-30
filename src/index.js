import React from 'react';
import { GlobalStyle } from './theme/global';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle whiteColor />
    <App />
  </React.StrictMode>
);
