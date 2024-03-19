import React,{ useState } from 'react';
import { RegisterPageWrapper, AnimacionOverlay} from './styledRegister';
import { LoginSignupComponent } from '../component/LoginSignup';

export const RegisterPage = () => {
    const [mostrarAnimacion, setMostrarAnimacion] = useState(true);
  
    const handleAnimacionClick = () => {
      setMostrarAnimacion(false);
    };
  
    return (
      <RegisterPageWrapper>
        {mostrarAnimacion && (
          <AnimacionOverlay className={mostrarAnimacion ? 'mostrar-animacion' : ''} onClick={handleAnimacionClick}>
            "Check today's weather"
          </AnimacionOverlay>
        )}
  
        {!mostrarAnimacion && <LoginSignupComponent />}
      </RegisterPageWrapper>
    );
  };