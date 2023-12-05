import React, { useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import './cardV1.css';

const CardV1 = ({ mostrarData, clima }) => {
  const [cargandoData, setCargandoData] = useState(false);

  const date = new Intl.DateTimeFormat('es').format(new Date());

  const idURL = mostrarData && clima?.weather?.[0]?.icon
    ? `http://openweathermap.org/img/w/${clima.weather[0].icon}.png`
    : '';

  const cardClasses = `mb-auto bg-secondary text-light border-0 ${mostrarData ? 'card-background' : ''}`;

  return (
    <Container className='mt-5'>
      {!cargandoData && (
        <Col xs={12} md={6} lg={4} className='mx-auto'>
          <Card className={cardClasses}>
            <Card.Body>
              {clima?.main?.temp && (
                <>
                  <Card.Title>{clima.name}</Card.Title>
                  <Card.Text>{date}</Card.Text>
                  <Card.Text>{(clima.main.temp - 273.15).toFixed(1)}°C</Card.Text>
                  <Card.Text>
                    <img
                      src={idURL}
                      alt={clima.weather[0]?.description || 'Weather icon'}
                    />
                    {clima.weather[0]?.description}
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      )}
    </Container>
  );
};

export default CardV1;