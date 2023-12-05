import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const SearchV1 = ({ newLocacion }) => {
  const [ciudad, setCiudad] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!ciudad.trim()) {
      alert('Por favor, ingrese el nombre de la ciudad.');
      return;
    }
    newLocacion(ciudad);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
      alert('Por favor, ingrese solo letras para la ciudad.');
      return;
    }
    setCiudad(inputValue);
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col  md='8' className='mt-5 '>
          <Form onSubmit={onSubmit}>
            <input
              className='form-control'
              type='text'
              placeholder='Buscar Ciudad'
              onChange={handleInputChange}
              value={ciudad}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchV1;