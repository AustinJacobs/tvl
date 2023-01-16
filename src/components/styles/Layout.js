import { Box } from '../../components/styles/Box';

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: '100%',
    }}>
    {children}
  </Box>
);
