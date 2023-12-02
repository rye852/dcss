import { FormControl, Input, InputLabel, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { Form, useNavigate } from 'react-router-dom';
import { FormContentProps } from './FormContent';
import { getAnItem } from '../helpers/fetchFromLocalStorage';
import { useState } from 'react';
const SignInSectyion = ({ file, setIsAuthnticate }: FormContentProps & {}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  return (
    <Form
      method="POST"
      action="/"
      id="form1"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const item = getAnItem({ email, password });
        if (item !== null) {
          setIsAuthnticate(true);
          navigate('/home/' + item.userName);
        } else {
          setError('passwrd or gmail not corect');
        }
      }}
      className={file.lang === 'Arabic' ? 'arabic' : ''}
    >
      <FormControl sx={{ marginTop: '.5rem' }}>
        <InputLabel htmlFor="email">{file.SignInUp.Email}</InputLabel>
        <Input
          error={error !== null}
          id="email"
          aria-describedby="my-helper-text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ marginTop: '.5rem' }}>
        <InputLabel htmlFor="password">{file.SignInUp.password}</InputLabel>
        <Input
          error={error !== null}
          type="Password"
          id="password"
          aria-describedby="my-helper-text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <Button
          type="submit"
          form="form1"
          variant="contained"
          endIcon={
            <SendIcon
              sx={{
                transform:
                  file.lang === 'Arabic' ? 'rotate(180deg)' : 'rotate(0)',
                margin: file.lang === 'Arabic' ? '0 8px 0 0' : '0 0 0 8px',
              }}
            />
          }
        >
          {file.SignInUp.send}
        </Button>
      </FormControl>
    </Form>
  );
};

export default SignInSectyion;
