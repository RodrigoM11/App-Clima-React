import styled from 'styled-components';
import cloudImage from '../../assets/HeavyCloud.png';


export const DivTemp = styled.div`

display: flex;
flex-direction: row;
`;

export const Wrapperdiv = styled.div`

// margin: 0 auto;
background-color: #1E213A;
display: flex;
flex-direction: column;
align-items: center;
padding: 8px;

// overflowX: 'auto'; 
// whiteSpace: 'nowrap'
margin: 8px;
`;

export const P = styled.p`

color: white;
font-weight: bold;
margin: 0 4px;
`;
export const Img = styled.img`

widht: 120px;
height:120px;

`;
export const DivI = styled.div`

widht: 100%;
height: 100%;

background-image: url(${cloudImage});
background-size: contain;
background-repeat: no-repeat;
background-color: #1E213A;
background-blend-mode: overlay;

`;