import styled from 'styled-components';
import { FormPlace } from './../SearchPlace/index';
import { QueryWeatherComponent } from './../../container/queryWeather';
import { ButtonsTempComponent } from '../ButtonsTemp/index';
import { QueryForecastComponent } from './../../container/queryForecast';
import { QueryWeatherDetailComponent } from './../../container/queryWeatherDetail';


const FormPlaceStyled = styled(FormPlace)``;

const ButtonsTempComponentStyled = styled(ButtonsTempComponent)``;

const QueryWeatherComponentStyled = styled(QueryWeatherComponent)``;

const QueryWeatherDetailComponentStyled = styled(QueryWeatherDetailComponent)``;

const QueryForecastComponentStyled = styled(QueryForecastComponent)``;


export const Div = styled.div`

cursor: pointer;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: #1E213A;
width:100%;
height:100%;
`;


export const DivL = styled.div`
background-color: #100E1D;
`;

export const WrapperDiv = styled.div`
  display: grid;
  grid-template-columns: 32% 68%;
  height: 100vh;
  width: 100%;

  @media (max-width: 600px) {
   grid-template-columns: 100%;

    ${Div} {
      & > ${FormPlaceStyled} {
        order: 1;
      }
      & > ${ButtonsTempComponentStyled} {
        order: 2;
      }
      & > ${QueryWeatherComponentStyled} {
        order: 3;
      }
    }

    ${DivL} {
      & > ${QueryWeatherDetailComponentStyled} {
        order: 1;
      }
      & > ${QueryForecastComponentStyled} {
        order: 2;
      }
    }
    console.log("Media query is applied");
  }
`;


