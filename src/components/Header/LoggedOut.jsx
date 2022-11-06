import { Box } from 'components/Box';
import { NavItem } from './LoggedOut.styled';

export const LoggedOut = () => {
  return (
    <Box as="nav" display="flex" justifyContent="space-between" width="100%">
      <h1>Welcome to PhoneBook</h1>
      <Box display="flex">
        <NavItem to="register">Registration</NavItem>
        <NavItem to="login">Login</NavItem>
      </Box>
    </Box>
  );
};
