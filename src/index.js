/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConversorMoedas from './conversor-moedas';
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <ConversorMoedas />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals.unregister();
