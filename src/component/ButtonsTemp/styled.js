import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Buttons = styled.button`

border-radius: 50%;
padding: 12px;
border: none;
margin-right: 8px;
background-color: #585676;
cursor: pointer;
font-weight: bold;
font-size: 16px;
color: #eee;

`;


export const StyledLink = styled(Link)`

border-radius: 50%;
padding: 12px;
margin-right: 5px;
background-color: #585676;
cursor: pointer;
color: #eee;
display: flex;
justify-content: center;
align-items: center;
`;

export const Div = styled.div`

display: flex;
justify-content: flex-end;
padding: 10px;
margin-top: 6px;
@media (max-width: 600px) {

justify-content: center;
    
}
`;

