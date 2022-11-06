import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes.input};
`;

export const Input = styled.input`
  
  margin-top: ${p => p.theme.space[3]}px;
`;