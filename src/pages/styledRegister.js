import styled from 'styled-components'
import clearImage from '../assets/Cloud-background.png'

export const RegisterPageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const AnimacionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #100E1D;
  background-image: url(${clearImage});
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
  font-size: 22px;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.9;
  }

  &.mostrar-animacion {
    opacity: 1;
    pointer-events: auto;
  }
`;