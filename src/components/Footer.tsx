import { Box, ThemeOptions } from '@mui/material';
import { useTheme } from '@emotion/react';
const Footer = () => {
  const { primary }: ThemeOptions = useTheme();
  return (
    <Box
      sx={{
         position: 'relative',
        width: '100%',
        // bottom: 0,
        transform: 'scale(1.5) translateY(-10px)',
        display: 'flex',
        zIndex: '-1',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={primary?.secondary}
          fill-opacity="1"
          d="M0,32L48,69.3C96,107,192,181,288,197.3C384,213,480,171,576,149.3C672,128,768,128,864,160C960,192,1056,256,1152,261.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Footer;
