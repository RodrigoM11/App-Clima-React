import React from 'react';
import { List, ImgWrapper, Div, H1, DivT, DivD, H4, H1W } from './styles';
import { useCoordenadas } from './../../context';

export const WeatherCityComponent = ({ weather } = {}) => {

const DataWeather= weather[0];
const { coordenadas } = useCoordenadas();

console.log(coordenadas.unit);
const unidad = coordenadas.unit === 'metric' ? '°C' : coordenadas.unit === 'imperial' ? '°F' : '';


const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString('en-US', options);
};

return (
    <List>
  <ImgWrapper>
<img src={DataWeather.weatherImage} alt="Weather" />
  </ImgWrapper>
  <Div>
<H1>{DataWeather.currentTemp}<DivT>{unidad}</DivT></H1>
<H1W>{DataWeather.weatherStatus}</H1W>
<H4>{DataWeather.city}<DivD>{formatDate(DataWeather.setDay)}</DivD></H4>
  </Div>
    </List>
 );
}; 













