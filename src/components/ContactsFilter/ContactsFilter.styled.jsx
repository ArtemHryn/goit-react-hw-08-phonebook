import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Input = styled.input`
  width: ${p => p.theme.sizes.input};
  margin-top: ${p => p.theme.space[3]}px;
`;