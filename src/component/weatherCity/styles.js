import styled, { css } from 'styled-components'
import clearImage from '../../assets/Cloud-background.png'


export const List = styled.div`
width:100%;
height:100%
display: flex; 
flex-direction: column;
align-items: center;
justify-content: space-between;

`
;



export const ImgWrapper = styled.div`

background-image: url(${clearImage});

background-size: contain;
background-repeat: no-repeat;
// background-size: contain;
background-color: #1E213A;
background-blend-mode: overlay;
width: 100%; 
height:250px;
background-position: center;
display: flex;
justify-content: center;

`;

export const Div = styled.div`

display: flex; 
flex-direction: column;
align-items: center;
// justify-content: space-between


`;

export const H1 = styled.h1`

font-weight: bold;
display: flex; 
flex-direction: row;
`;


export const DivT = styled.div`

margin-left: 10px;
`;

export const DivD = styled.div`

margin-left: 16px;
`;

export const H1W = styled.h1`

margin-top: -2px;
`;

export const H4 = styled.h4`

// margin-top: 2px;
font-weight: bold;
display: flex; 
flex-direction: row;
color: white; 
`;