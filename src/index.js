import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';

const firebaseConfig = {
    /* completar y salvar en ultimo push */
  };

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />  
);