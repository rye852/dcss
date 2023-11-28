import { FormControl, Input, InputLabel, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { Form } from 'react-router-dom';
import { FormContentProps } from './FormContent';
const SignInSectyion = ({
  file,
  setHome
}: FormContentProps & {
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

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
      onSubmit={() => setHome(true)}
      className={file.lang === 'Arabic' ? 'arabic' : ''}
    >
      <FormControl sx={{ marginTop: '.5rem' }}>
        <InputLabel htmlFor="userName">{file.SignInUp.userName}</InputLabel>
        <Input
          required
          id="userName"
          aria-describedby="my-helper-text"
          name="userName"
        />
      </FormControl>

      <FormControl sx={{ marginTop: '.5rem' }}>
        <InputLabel htmlFor="email">{file.SignInUp.Email}</InputLabel>
        <Input
          id="email"
          aria-describedby="my-helper-text"
          name="email"
        />
      </FormControl>
      <FormControl sx={{ marginTop: '.5rem' }}>
        <InputLabel htmlFor="password">{file.SignInUp.password}</InputLabel>
        <Input
          type="Password"
          id="password"
          aria-describedby="my-helper-text"
          name="password"
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
