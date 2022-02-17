import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <App />
  )
}

const rootEleement = document.getElementById('root');
ReactDOM.render(<Main />, rootEleement)