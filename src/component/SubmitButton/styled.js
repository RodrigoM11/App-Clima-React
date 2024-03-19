import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  font-size: 12.8px;
  font-weight: bold;
  height: 32px;
  display: block;
  width: 50%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`