import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavbarV1 = () => {
  return (
    <Navbar 
    bg='primary'
    data-bs-theme="dark"
    className="
    d-flex 
    justify-content-center">
      <Container fluid>
        <Navbar.Brand 
        className='mx-auto'>Tiempo Meteorológico</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarV1;
