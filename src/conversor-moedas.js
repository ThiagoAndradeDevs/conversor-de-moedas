/* eslint-disable no-unused-vars */
import React from 'react'
import './conversor-moedas.css';
import { Button, Form, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


function ConversorMoedas() {
  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <div className='Jumbo'>
        <Form>
          <Form.Row>
            <Col sm='3'>
              <Form.Control
                placeholder='0'
                value={1}
                required />
            </Col>
            <Col sm='3'>
              <Form.Control as='select'>
              </Form.Control>
            </Col>
            <Col sm='1' className='text-center' style={{ paddingTop: '5px' }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm='3'>
              <Form.Control as='select'>
              </Form.Control>
            </Col>
            <Col sm='2'>
              <Button variant='success' type='submit' />
            </Col>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
}

export default ConversorMoedas;
