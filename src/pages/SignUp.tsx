import { Container, Typography } from '@mui/material';
import { fileType } from '../helpers/languages';
import {  useOutletContext } from 'react-router';
import FormSign from '../components/FormSign';

const SignUp = () => {
  const file: fileType = useOutletContext();
  
  
  return (
    <Container
      className="forcePadding0"
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      <Typography textAlign={"center"} sx={{position: "absolute"}} color={"#777"} variant='h6'>
      *not working just A demo*
      </Typography>
      <FormSign file={file} />
    </Container>
  );
};

export default SignUp;
