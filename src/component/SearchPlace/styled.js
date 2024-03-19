import styled from 'styled-components';

export const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const MainForm = styled.form`
display: ${(props) => (props.$visible ? 'flex' : 'none')};
// justify-content: center;
align-items: center;
flex-direction: column;
`;


export const Input = styled.input`

border: 1px solid #ccc;
border-radius: 3px;
margin-bottom: 8px;
padding: 8px 0px;
width: 200px;
box-sizing: border-box;
font-size: 12px;
text-align: center;
`;

export const Button  = styled.button`

cursor: pointer;
border: none;
border-radius: 60%;
background-color: rgba(255, 255, 255, 0.2);
width: 40px;
height: 40px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
margin-top: 5px;
`;

export const Buttom  = styled.button`

background: rgba(141, 0, 255, 0.8);
border-radius: 3px;
color: #fff;
height: 32px;
display: block;
width: 100%;
text-align: center;
`;

export const Icon = styled.img`
  
 
`;