import React, { useRef } from 'react';
import { Buttons, Div, StyledLink } from './styled';
import { useCoordenadas } from '../../context';
import { MdPersonOutline } from 'react-icons/md';

export const ButtonsTempComponent = () => {
  
    const { actualizarTemperatura } = useCoordenadas();
    
    const wrapperRefC = useRef(null);
    const wrapperRefF = useRef(null);
    const wrapperRefG = useRef(null);

    const handleTemp = (newUnit) => {
      actualizarTemperatura({ unit: newUnit });
    };
  
    const handleMouseOver = (wrapperRef) => {
      wrapperRef.current.style.opacity = '0.8';
  };

  const handleMouseOut = (wrapperRef) => {
      wrapperRef.current.style.opacity = '1';
  };
    return (
      <Div>
        <div ref={wrapperRefC} onMouseOver={() => handleMouseOver(wrapperRefC)} onMouseOut={() => handleMouseOut(wrapperRefC)}>
        <Buttons onClick={() => handleTemp("metric")}>°C</Buttons>
        </div>
        <div ref={wrapperRefF} onMouseOver={() => handleMouseOver(wrapperRefF)} onMouseOut={() => handleMouseOut(wrapperRefF)}>
        <Buttons onClick={() => handleTemp("imperial")}>°F</Buttons>
        </div>
        <div ref={wrapperRefG} onMouseOver={() => handleMouseOver(wrapperRefG)} onMouseOut={() => handleMouseOut(wrapperRefG)}>
        <StyledLink to='/user'><MdPersonOutline size={'18px'} /></StyledLink>
        </div>
      </Div>
    );
  };