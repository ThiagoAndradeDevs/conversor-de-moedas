/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ListarMoedas from './listar-moedas'

describe('Teste d componente de listagem de moedas', () => {
  it('deve reinderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})