import styled from "styled-components";
import { Form, Field } from 'formik';

export const ErrorText = styled.p`
  color: red;
`;

export const FormBlock = styled(Form)`
  width: 500px;
  border: ${p => p.theme.borders.normal};
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: ${p => p.theme.space[3]}px;
`
export const Input = styled(Field)`
  width: ${p => p.theme.sizes.input};
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.sizes.button};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover{
    background-color: ${p => p.theme.colors.btnHover};
  }
`;