/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React from 'react'
import './conversor-moedas.css';
import { Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ListarMoedas from './listar-moedas';


function ConversorMoedas() {
  return (
    <div>
      <h1>Conversor de Moedas</h1>

      <Alert variant="danger" show={false}>
        Erro obtendo dados de conversao, tente novamente.
      </Alert>
      <div className='jumbo'>
        <Form>
          <h2>
            <h3 sm="3">
              <Form.Control placeholder="0" value={1} required />
            </h3>
            <h3 sm="3">
              <Form.Control as="select">
                <ListarMoedas></ListarMoedas>
              </Form.Control>

            </h3>
            <h3 sm="1"
              className="text-center" style={{ paddingTop: "5px" }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </h3>
            <h3 sm="3">
              <Form.Control as="select">
                <ListarMoedas></ListarMoedas>
              </Form.Control>

            </h3>
            <h3 sm="2">
              <Button variant="success" type="submit" >
                <Spinner animation="border" size="sm" />
              </Button>
            </h3>
            <Modal show={false}>
              <Modal.Header closeButton>
                <Modal.Title>Conversão</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Resultado da conversão aqui ...
                </Modal.Body>
              <Modal.Footer>
                <Button variant="success">nova conversão</Button>
              </Modal.Footer>
            </Modal>
          </h2>
        </Form>

      </div>


    </div>
  )
}
export default ConversorMoedas;
