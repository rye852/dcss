import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { ThemeOptions } from '@mui/material/styles';

import { useState } from 'react';
import FormContent from './FormContent';
import { OutletContextType } from '../App';

const FormSign = ({
  file,
  file: { SignInUp },
  setIsAuthnticate,
}: OutletContextType) => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const { primary }: ThemeOptions = useTheme();
  return (
    <Card sx={{ maxWidth: 345, marginTop: '5rem' }}>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        {isSignIn ? (
          <>
            <Button
              sx={{ background: primary?.therd }}
              variant="contained"
              className="signUpBtn"
              onClick={() => setIsSignIn((p) => !p)}
            >
              {SignInUp.SignUpBtn}
            </Button>
            <Button
              disabled
              sx={{ background: primary?.therd }}
              variant="contained"
              className="signUpBtn"
            >
              {SignInUp.signInBtn}
            </Button>
          </>
        ) : (
          <>
            <Button
              disabled
              sx={{ background: primary?.therd }}
              variant="contained"
              className="signUpBtn"
            >
              {SignInUp.SignUpBtn}
            </Button>
            <Button
              sx={{ background: primary?.therd }}
              variant="contained"
              className="signUpBtn"
              onClick={() => setIsSignIn((p) => !p)}
            >
              {SignInUp.signInBtn}
            </Button>
          </>
        )}
      </CardActions>
      <CardContent sx={{ width: '600px', maxWidth: '100%' }}>
        <FormContent
        setIsAuthnticate={setIsAuthnticate}
          file={file}
          isSignIn={isSignIn}
        />
      </CardContent>
    </Card>
  );
};

export default FormSign;
