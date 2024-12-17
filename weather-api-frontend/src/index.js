import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação do 'react-dom/client'
import './index.css';
import App from './App';

// Criação da raiz para renderização no React 18
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
