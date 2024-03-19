import styled from 'styled-components';

export const Div = styled.div`

display: grid;
grid-template-columns: 28% 28% ;
grid-gap: 30px 30px; 
justify-content: center;
padding-top: 8px;

@media (max-width: 600px) {

grid-template-columns: 100%;

}
`



export const DIV = styled.div`

display: flex;
flex-direction: row;

`

export const Text = styled.p`

margin-right: 8px;
color: white;
font-weight: bold;
// font-size: 20px;

`

export const P = styled.p`

margin-right: 8px;
color: white;
font-weight: bold;
`

export const DivW = styled.div`

display: flex;
flex-direction: column ;
align-items: center;
background-color:#1E213A;

`


export const Button = styled.button`

width: 28px;
height: 28px;
border-radius: 50%;
padding: 5px;  
background-color: rgba(255, 255, 255, 0.3);
border: none;
cursor: pointer;
// padding-top: -18px;

`

export const DivB = styled.div`

padding-bottom: 10px; 
display: flex;
flex-direction: row;
align-items: center;
`

export const Pwd = styled.p`

cursor: pointer;
color: white;
font-weight: bold;
font-size: 12px
`