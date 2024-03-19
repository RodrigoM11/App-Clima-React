import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { QueryWeatherComponent } from './queryWeather';
import { useCoordenadas, CoordenadasProvider } from '../context';

const GET_COORDENADAS = gql`
  query get_coordenadas($city: String!) {
    coordenadas(city: $city) {
      lat
      lon
    }
  }
`;



export const QueryCoordenadasComponent = ({ variables }) => {

  const { loading, error, data } = useQuery(GET_COORDENADAS, {
    variables,
  });

  const { actualizarCoordenadas } = useCoordenadas();

  useEffect(() => {
    if (data) {
      const { coordenadas } = data;
      const { lat, lon } = coordenadas || {};
      actualizarCoordenadas({ lat, lon });
    }
  }, [data]);


  if (loading) return <h4>Cargando...</h4>;
  if (error) return <h4>Error: {error.message}</h4>;

  return null;
};


  // const { loading, error, data } = useQuery(GET_COORDENADAS, {
  //   variables: { city:'argentina,cordoba '},
  // });
  
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  
  // const { coordenadas } = data;
  // const { lat, lon } = coordenadas || {};
  
  
  // return <QueryWeatherComponent lat={lat} lon={lon} />;










