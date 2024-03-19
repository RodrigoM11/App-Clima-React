import React, { createContext, useContext, useState, useEffect } from 'react';

const CoordenadasContext = createContext();


export const CoordenadasProvider = ({ children }) => {

  const [coordenadas, setCoordenadas] = useState({ lat: 0, lon: 0, unit: 'metric' });

  const obtenerCoordenadas = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          try {
            const { latitude, longitude } = position.coords;
            setCoordenadas((prevCoordenadas) => ({ ...prevCoordenadas, lat: latitude, lon: longitude, }));
          } catch (err) {
            console.error(err);
          }
        },
        function (error) {
          console.error(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    obtenerCoordenadas();
  }, []);



  const actualizarCoordenadas = ({ lat, lon }) => {
    setCoordenadas(prevCoordenadas => ({ ...prevCoordenadas, lat, lon }))
  };

  const actualizarTemperatura = ({ unit }) => {
    setCoordenadas(prevCoordenadas => ({ ...prevCoordenadas, unit }));
  };

  const resetearCoordenadas = () => {
    obtenerCoordenadas();
  };


  return (
    <CoordenadasContext.Provider
      value={{ coordenadas, actualizarCoordenadas, resetearCoordenadas, actualizarTemperatura }}
    >
      {children}
    </CoordenadasContext.Provider>
  );
};

export const useCoordenadas = () => {
  return useContext(CoordenadasContext);
};
