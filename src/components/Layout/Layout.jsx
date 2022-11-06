import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Box p={5}>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback={<Loader/>}>
      <Outlet />
      </Suspense>
    </Box>
  );
};
