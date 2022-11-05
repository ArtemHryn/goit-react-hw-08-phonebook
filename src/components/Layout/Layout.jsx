import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';

export const Layout = () => {
  return (
    <Box p={5}>
      <GlobalStyle />
      <AppBar />
      <Outlet />
    </Box>
  );
};
