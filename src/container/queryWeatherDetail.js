import React from 'react'
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useCoordenadas } from '../context';
import { DetailTodayComponent } from '../component/DetailToday';

const GET_WEATHER_DETAIL = gql`
  query getWeatherDetail ($unit: String!, $lat: Float!, $lon: Float!) {
    weatherDetail (cCity:{unit: $unit, lat: $lat, lon: $lon}) {
      setDay
      humidity
      visibility
      airPressure
      windStatus
      windCardinalDirection
    }
  }
`;

export const QueryWeatherDetailComponent = () => {

  const { coordenadas } = useCoordenadas();
  const { loading, error, data } = useQuery(GET_WEATHER_DETAIL, {
    variables: {  unit:  coordenadas.unit, lat: coordenadas.lat, lon: coordenadas.lon },
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { weatherDetail } = data;
  
  console.log('detail',weatherDetail)

  if (!weatherDetail || !Array.isArray(weatherDetail) || weatherDetail.length === 0) {
    return <p>No weather data available</p>;
  }


  const {
    humidity,
    visibility,
    airPressure,
    windStatus,
    windCardinalDirection,
  } = weatherDetail[0];

console.log('destructuracion', humidity)

  return(
    <DetailTodayComponent
        humidity={humidity}
        visibility={visibility}
        airPressure={airPressure}
        windStatus={windStatus}
        windCardinalDirection={windCardinalDirection}
    />
  ) 
};


    




       
   


