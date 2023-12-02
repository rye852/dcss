import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


const ErrorPage = () => {
  return (
    <Box sx={{margin: '2em auto'}}>
      <Typography variant='h2' color={'#d32f2f'}>404 Page Not Found</Typography>
      <Typography variant='h4' >oops this link is not working</Typography>
      <Link to={'/'}>
        <Button variant='contained' sx={{ margin: '1em auto', fontSize: {xs: "1rem", md: "2rem"} }}>Home Page</Button>
      </Link>
    </Box>
  );
};

export default ErrorPage;
