import React from 'react';
import { styled } from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  background-color: #4285f4;
  color: #2b303a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #08c0fa;
  }
  &:active {
    transform: translateY(1px);
  }
  &.disabled {
    background-color: grey;
  }
`;

const SubmitButton = (props) => {
  return <Button {...props} />;
};
export default SubmitButton;