import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px;
  width: 50%;
  display: flex;
  flex-direction:column;
  align-items: center;  
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 50%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  // font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`

export const Div = styled.div`
display: flex;
flex-direction:column;
align-items: center;  
`;