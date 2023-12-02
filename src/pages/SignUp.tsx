import { Container } from '@mui/material';

import {  useOutletContext } from 'react-router';
import FormSign from '../components/FormSign';
import { OutletContextType } from '../App';

const SignUp = () => {
  const {file, isAuthnticate, setIsAuthnticate}: OutletContextType = useOutletContext();
  
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
      <FormSign isAuthnticate={isAuthnticate} setIsAuthnticate={setIsAuthnticate} file={file} />
    </Container>
  );
};

export default SignUp;
