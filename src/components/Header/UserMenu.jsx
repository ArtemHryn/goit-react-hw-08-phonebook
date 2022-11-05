import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth-operations';
import { getName } from 'redux/selectors';
import { Button, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(getName);

  return (
    <Box display="flex" alignItems="center">
      <UserName>{username}</UserName>
      <Button
        variant="outlined"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
