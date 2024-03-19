import React, { useState } from 'react'
import { FormPlace } from '../SearchPlace/index';
import { Div, WrapperDiv, DivL } from './styled'
import { useCoordenadas } from '../../context';
import { ButtonsTempComponent } from '../ButtonsTemp';
import { QueryWeatherComponent } from '../../container/queryWeather';
import { QueryForecastComponent } from '../../container/queryForecast';
import { QueryWeatherDetailComponent } from '../../container/queryWeatherDetail';


export const OutputPlaceComponent = () => {

  const { resetearCoordenadas } = useCoordenadas();
  const [formVisible, setFormVisible] = useState(false)


  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const closeForm = () => {

    setFormVisible(false);
  };

  return (
    <WrapperDiv>
      <Div onClick={() => { resetearCoordenadas(); closeForm() }} >
        <FormPlace toggleForm={toggleForm} formVisible={formVisible} />
        <QueryWeatherComponent />
      </Div>

      <DivL onClick={() => closeForm()}>
        <ButtonsTempComponent />
        <QueryForecastComponent />
        <QueryWeatherDetailComponent />
      </DivL>
    </WrapperDiv>
  )
}