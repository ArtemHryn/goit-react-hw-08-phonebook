import { Box } from 'components/Box';
import { NavItem } from './LoggedOut.styled';

export const LoggedOut = () => {
  return (
    <Box as="nav" display='flex'>
      <NavItem to="register">Registration</NavItem>
      <NavItem to="login">Login</NavItem>
    </Box>
  );
};
