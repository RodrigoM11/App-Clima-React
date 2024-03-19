import React from 'react'
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useCoordenadas } from '../context';
import { ListOfForecastCityComponent } from '../component/ListOfForecastCity';

const GET_FORECAST = gql`
  query getForecast($unit: String!, $lat: Float!, $lon: Float!) {
    forecast (cCity:{unit: $unit, lat: $lat, lon: $lon}) {
        dayCar
        maxTempPromedio
        minTempPromedio
        firstImage 
    }
  }
`;

export const QueryForecastComponent = () => {

  const { coordenadas } = useCoordenadas();

  const { loading, error, data } = useQuery(GET_FORECAST, {
    variables: { unit:  coordenadas.unit, lat: coordenadas.lat, lon: coordenadas.lon },
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <h4>Error: {error.message}</h4>;

  const { forecast } = data;

  if (!forecast || !Array.isArray(forecast) || forecast.length === 0) {
    return <h4>No weather data available</h4>;
  }

  
  console.log('queryforecast',forecast)

  return <ListOfForecastCityComponent forecast={forecast}/>

};




// let acum=0;
// const now = new Date(Date.now())
// let indices = [];
// let ForecastFiltrado = [];

// for (i=0; i<= forecast.length; i++){
//   for(j=acum; forecast[j].dayCar===now+i; ){
    
//     k=0;
//     indices[k]=forecast[j].maxTemp
//     k=1;


//     acum=j+1;
//   }
//  ForecastFiltrado[i] = ( indices[0] + indices[indices.length] )/2;
//  let indices = [];
// }
