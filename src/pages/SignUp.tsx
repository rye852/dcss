import { Container } from '@mui/material';
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
      <FormSign file={file} />
    </Container>
  );
};

export default SignUp;
