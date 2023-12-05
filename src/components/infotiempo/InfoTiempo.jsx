import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import SearchV1 from '../search/SearchV1';
import CardV1 from '../card/CardV1';

const InfoTiempo = () => {
  const [clima, setClima] = useState({});
  const [horas, setHoras] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [locacion, setLocacion] = useState('');

  const API_KEY = 'fe145e0b149afedce64324c63a186292';
  const API_URL = 'https://api.openweathermap.org/data/2.5';

  const getLocacion = async (loc) => {
    try {
      setCargando(true);
      setLocacion(loc);

      const urlTiempo = `${API_URL}/weather?appid=${API_KEY}&lang=es&q=${loc}`;
      const urlHoras = `${API_URL}/forecast?appid=${API_KEY}&lang=es&q=${loc}`;

      const [responseClima, responseHoras] = await Promise.all([
        fetch(urlTiempo),
        fetch(urlHoras),
      ]);

      if (!responseClima.ok || !responseHoras.ok) {
        throw new Error('Error en la solicitud de la API');
      }
      const climaData = await responseClima.json();
      const horasData = await responseHoras.json();

      setClima(climaData);
      setHoras(horasData.list);

      setCargando(false);
      setMostrar(true);
    } catch (error) {
      console.error(error);
      setCargando(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setCargando(true);
      await getLocacion(locacion);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <SearchV1 newLocacion={getLocacion} />
      <CardV1 mostrarData={mostrar} cargandoData={cargando} clima={clima} horas={horas} />
    </>
  );
};

export default InfoTiempo;
