import {
  FormControl,
  RadioGroup,
  Input,
  InputLabel,
  FormControlLabel,
  FormLabel,
  Radio,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { fileType } from '../helpers/languages';
import { Form, useNavigate } from 'react-router-dom';
import SignInSection from './SignInSection';
import { useState } from 'react';
export type FormContentProps = {
  file: fileType;
};
const FormContent = ({
  file,
  isSignIn,
}: FormContentProps & { isSignIn: boolean }) => {
  const navigate = useNavigate();
  const [home, setHome] = useState<boolean>(false);
  return (
    <>
      {home ? navigate('/home') : ''}
      {isSignIn ? (
        <SignInSection
          file={file}
          setHome={setHome}
        />
      ) : (
        <Form
          onSubmit={() => setHome(true)}
          method="POST"
          action="/"
          id="form1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            transition: '0.3s',
          }}
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
          <FormControl
            className="dont-change"
            sx={{ marginTop: '.5rem' }}
          >
            <FormLabel id="gender">{file.SignInUp.gender.gender}</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender"
              name="gender"
              sx={{ justifyContent: 'center' }}
            >
              <FormControlLabel
                value={file.SignInUp.gender.women}
                control={
                  <Radio
                    sx={{
                      color: 'rgb(216, 27, 96)',
                      '&.Mui-checked': {
                        color: 'rgb(216, 27, 96);',
                      },
                    }}
                  />
                }
                label={file.SignInUp.gender.women}
              />
              <FormControlLabel
                value={file.SignInUp.gender.man}
                control={<Radio color="success" />}
                label={file.SignInUp.gender.man}
              />
            </RadioGroup>
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
      )}
    </>
  );
};

export default FormContent;
