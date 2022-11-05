import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 500px;
`;

export const StyledButton = styled(Button)`
  width: 500px;
`;

export const DecorInput = styled.div`
  margin-bottom: 20px;
`;
