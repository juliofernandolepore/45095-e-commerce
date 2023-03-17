import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyCCY26rdeoFc0EsP-ia-L3AumgWQjwFUwc",
  authDomain: "e-commerce45095.firebaseapp.com",
  projectId: "e-commerce45095",
  storageBucket: "e-commerce45095.appspot.com",
  messagingSenderId: "392985047457",
  appId: "1:392985047457:web:faf8c00760c66def71dbe0",
  };

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />  
);