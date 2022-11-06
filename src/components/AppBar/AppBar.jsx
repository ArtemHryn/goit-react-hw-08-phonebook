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
      borderBottom="normal"
      p={4}
    >
      {isLoggedIn ? (
        <Box as='nav' width='100%'>
          <UserMenu />
        </Box>
      ) : (
        <LoggedOut />
      )}
    </Box>
  );
};
