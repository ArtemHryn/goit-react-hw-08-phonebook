import styled from "styled-components";

export const ContactList = styled.ul`
  list-style: square;
  padding-left: ${p => p.theme.space[5]}px;
`;

export const ContactItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
  :last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

export const Contact = styled.span`
  font-family: ${p => p.theme.fonts.contacts};
`;

export const DeleteButton = styled.button`
  margin-left: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover {
    background-color: ${p => p.theme.colors.deleteBtn};
  }
`;

export const EditButton = styled.button`
  margin-left: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  :hover {
    background-color: ${p => p.theme.colors.deleteBtn};
  }
`;

export const Input = styled.input`
  width: 120px;
  :first-child{
    margin-right: 10px;
  }
`