import React, { useState, useRef } from 'react';
import { MainContainer, MainForm, Input, Button, Icon, Buttom } from './styled';
import { QueryCoordenadasComponent } from '../../container/queryCoordenadas';
import gpsIcon from '../../assets/gps-icon.svg'


export const FormPlace = ({ toggleForm, formVisible }) => {
  const [place, setPlace] = useState('');
  const [variables, setVariables] = useState({ city: '' })



  const onChange = (event) => {
    setPlace(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setVariables({ city: place });
    setPlace('');
  };


  const wrapperRefB = useRef(null);

  const handleMouseOver = (wrapperRef) => {
    wrapperRef.current.style.opacity = '0.6';
  };

  const handleMouseOut = (wrapperRef) => {
    wrapperRef.current.style.opacity = '1';
  };


  return (
    <MainContainer onClick={(event) => event.stopPropagation()}>

      <Button ref={wrapperRefB} type="button" onClick={toggleForm} onMouseOver={() => handleMouseOver(wrapperRefB)} onMouseOut={() => handleMouseOut(wrapperRefB)}>
        <Icon src={gpsIcon} alt="Icono" />
      </Button>

      <MainForm $visible={formVisible} onSubmit={handleSubmit}>
        <Input
          id="placeName"
          placeholder="Argentina,Cordoba,NuevaCordoba"
          value={place}
          onChange={onChange}
        />
        <Buttom type="submit" onClick={toggleForm}>Search</Buttom>
      </MainForm>

      {variables.city && (
        <QueryCoordenadasComponent key={variables.city} variables={variables} />
      )}

    </MainContainer>
  );
};










// export const FormPlace = ({ onSubmit, disabled, title }) => {
//   const [value, setValue] = useState('');

//   const onChange = (e) => setValue(e.target.value);

//   const place = value;

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({
//       city: place,
//     });
//   };

//   return (
//     <Fragment>
//       <form onSubmit={handleSubmit}>
//         <input disabled={disabled} placeholder="Argentina,Cordoba,NuevaCordoba" value={place} onChange={onChange} />
//         <button type="submit">Search</button>
//       </form>
//     </Fragment>
//   );
// };



