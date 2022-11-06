import { Box } from 'components/Box';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Circles
        height="200"
        width="200"
        color="red"
        ariaLabel="circles-loading"
        visible={true}
        wrapperStyle={{ display: 'inline' }}
      />
    </Box>
  );
};
