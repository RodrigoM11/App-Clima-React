import React, { useRef } from 'react';
import { DivTemp, Wrapperdiv, P, Img, DivI } from './styled';


export const ForecastCityComponent = ({ dayCar, maxTempPromedio, minTempPromedio, firstImage }) => {

   const wrapperRef = useRef(null);

   const handleMouseOver = () => {
      wrapperRef.current.scrollLeft += 50;
      wrapperRef.current.style.transform = 'scale(1.2)';
   };

   const handleMouseOut = () => {

      wrapperRef.current.style.transform = 'scale(1)';
   };

   return (


      <Wrapperdiv ref={wrapperRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
         <P>{dayCar}</P>
         <DivI>
            <Img src={`https://openweathermap.org/img/wn/${firstImage}.png`} alt="Weather Icon" />
         </DivI>
         <DivTemp>
            <P>Max</P> <P>{maxTempPromedio}</P> <P>Min</P><P>{minTempPromedio}</P>
         </DivTemp>
      </Wrapperdiv>
   )
}