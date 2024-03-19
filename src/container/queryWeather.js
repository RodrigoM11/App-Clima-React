import React from 'react'
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { WeatherCityComponent } from '../component/weatherCity/index';
import { useCoordenadas } from '../context';

const GET_WEATHER = gql`
  query getWeather ($unit: String!, $lat: Float!, $lon: Float!) {
    weather (cCity:{unit: $unit, lat: $lat, lon: $lon}) {
      setDay
      city
      currentTemp
      weatherStatus
      weatherImage
    }
  }
`;

export const QueryWeatherComponent = () => {

  const { coordenadas } = useCoordenadas();
  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: {  unit:  coordenadas.unit, lat: coordenadas.lat, lon: coordenadas.lon },
    fetchPolicy: 'network-only',
  });

  if (loading) return <h4>Cargando...</h4>;
  if (error) return <h4>Error: {error.message}</h4>;

  const { weather } = data;
  console.log('weather', weather)
  if (!weather || !Array.isArray(weather) || weather.length === 0) {
    return <h4>No weather data available</h4>;
  }

  return <WeatherCityComponent weather={weather} />
};





       
   


