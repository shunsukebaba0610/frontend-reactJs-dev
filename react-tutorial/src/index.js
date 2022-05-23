import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>, 
);
