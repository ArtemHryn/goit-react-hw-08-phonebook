import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/selectors';
import { UserMenu } from 'components/Header/UserMenu';
import { LoggedOut } from 'components/Header/LoggedOut';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLogin);
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      borderBottom="normal"
      p={4}
    >
      <h1>Welcome to PhoneBook</h1>
      {isLoggedIn ? (
        <Box as='nav'>
          <UserMenu />
        </Box>
      ) : (
        <LoggedOut />
      )}
    </Box>
  );
};
