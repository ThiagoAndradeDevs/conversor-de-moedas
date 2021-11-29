/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ConversorMoedas from './conversor-moedas'

it('deve reinderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas />, div);
  ReactDOM.unmountComponentAtNode(div);
});