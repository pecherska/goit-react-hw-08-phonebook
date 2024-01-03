import styled from 'styled-components';
import { Form, Field } from 'formik';

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
`;

export const LoginFormButton = styled.button`
  margin: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 120px;
  width: 100%;
  background-color: rgb(194, 139, 240);
  padding: 5px;
`;

export const LoginFormInput = styled(Field)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
`;
