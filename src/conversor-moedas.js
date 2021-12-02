/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './conversor-moedas.css';
import { Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ListarMoedas from './listar-moedas';
import axios from 'axios';


function ConversorMoedas() {
  const FIXER_URL = 'http://data.fixer.io/api/ latest? access_key = ba6178d5eb9814fb9af2c0c6ec23045d';
  const [valor, setValor] = useState('1')
  const [moedaDe, setMoedaDe] = useState('BRL')
  const [moedaPara, setMoedaPara] = useState('USD')
  const [exibirSpiner, setExibirSpiner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false)
  const [resultadoConversao, setResultadoConversao] = useState(' ');
  const [exibirMsgErro, setExibirMsgErro] = useState(false)


  function handleValor(event) {
    setValor(event.target.value.replace(/\D/g, ' '));
  }
  function handleMoedaDe(event) {
    setMoedaDe(event.target.value);
  }
  function handleMoedaPara(event) {
    setMoedaPara(event.target.value);
  }
  function handleFecharModal(event) {
    setValor('1');
    setMoedaDe('BRL');
    setMoedaPara('USD');
    setFormValidado(false);
    setExibirModal(false);
  }
  function converter(event) {
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      setExibirSpiner(true);
      axios.get(FIXER_URL)
        .then(res => {
          const cotacao = obterCotacao(res.data);
          if (cotacao) {
            setResultadoCotacao(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`);
            setExibirModal(true);
            setExibirSpiner(false);
            setExibirMsgErro(false);
          } else {
            exibirErro();
          }
        }).catch(err => exibirErro());
    }
  }
  function obterCotacao() {
    if (!dadosCotacao || dadosCotacao.success !== true) {
      return false;
    }
    const cotacaoDe = dadosCotacao.rates[moedaDe];
    const cotacaoPara = dadosCotacao.rate[moedaPara];
    const cotacao = (1 / cotacaoDe * cotacaoPara) * valor;
    return cotacao.toFixed(2);
  }
  function exibirErro() {
    setExibirMsgErro(true);
    setExibirSpiner(false);
  }
  return (
    <div>
      <h1>Conversor de Moedas</h1>

      <Alert variant="danger" show={exibirMsgErro}>
        Erro obtendo dados de conversao, tente novamente.
      </Alert>
      <div className='jumbo'>
        <Form onSubmit={converter} noValidate validated={formValidado}>
          <h2>
            <h3 sm="3">
              <Form.Control placeholder="0" value={valor} onChange={handleValor} required />
            </h3>
            <h3 sm="3">
              <Form.Control as="select" value={moedaDe}
                onChange={handleMoedaDe}>
                <ListarMoedas></ListarMoedas>
              </Form.Control>

            </h3>
            <h3 sm="1"
              className="text-center" style={{ paddingTop: "5px" }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </h3>
            <h3 sm="3">
              <Form.Control as="select"
                value={moedaPara}
                onChange={handleMoedaPara}>
                <ListarMoedas></ListarMoedas>
              </Form.Control>

            </h3>
            <h3 sm="2">
              <Button variant="success" type="submit" data-testid="btn-converter" >
                <span className={exibirSpiner ? null : 'hidden'}>
                  <Spinner animation="border" size="sm" /></span>
                <span className={exibirSpiner ? 'hidden' : null}>
                  Converter</span>
              </Button>
            </h3>
            <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
              <Modal.Header closeButton>
                <Modal.Title>Conversão</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {resultadoConversao}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleFecharModal}>
                  Nova conversão
                  </Button>
              </Modal.Footer>
            </Modal>
          </h2>
        </Form>

      </div>


    </div>
  )
}
export default ConversorMoedas;
