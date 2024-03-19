import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Div = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #100E1D;
`;

export const StyledLink = styled(Link)`

border: none;
padding: 16px;
color: white;
`;