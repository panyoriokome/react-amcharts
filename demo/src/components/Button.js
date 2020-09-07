import React from 'react'
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  width: 200px;
  max-width: 100%;
  padding: 20px 10px;
  background-color: #e25c00;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0. 0, 0, .16);
  color: #fff;
  font-size: 1.124rem;
  text-align: center;
  text-decoration: none;
  transition: .25s;
  cursor: auto;

  &:focus,
  &:hover {
    background-color: #fff;
    border-color: currentColor;
    color: #e25c00;
  }
`

function Button({ onClick, children, ...otherProps}) {
return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

export default Button;