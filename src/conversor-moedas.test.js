/* eslint-disable testing-library/await-async-query */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import ConversorMoedas from './conversor-moedas'
import { render, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

describe('Teste do componente de conversao de moedas', () => {

  it('deve reinderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('deve simular uma conversao de moedas', () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: { sucess: true, rates: { BRL: 4.564292, USD: 1.101049 } }
    });
    fireEvent.click(getByTestId('btn-converter'));
    const modal = findByTestId('modal');
  });
});
