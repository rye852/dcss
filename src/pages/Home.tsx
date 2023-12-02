import { useTheme } from '@emotion/react';
import {
  Container,
  ThemeOptions,
  Typography,
  Box,
  Stack,
  Button,
} from '@mui/material';
import { Navigate, useOutletContext, useParams } from 'react-router';
import { useState } from 'react';
import LinksToSections from '../components/LinksToSections';
type stateType = {
  state: number;
  color: string;
};
import { OutletContextType } from '../App';

const Home = () => {
  const { file, isAuthnticate }: OutletContextType = useOutletContext();
  const { primary }: ThemeOptions = useTheme();
  const [state, setState] = useState<stateType | null>(null);
  const params = useParams();
  console.log(state);
  return isAuthnticate ? (
    <Container
      sx={{
        direction: file.lang === 'Arabic' ? 'rtl' : 'ltr',
        flexGrow: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1em',
      }}
    >
      <Typography
        variant="h3"
        component={'h1'}
        color={primary?.secondary}
        lineHeight={'2'}
        fontFamily={`'Noto Sans', sans-serif`}
      >
        {file.message}
        <Typography
          variant="h3"
          component={'span'}
          color={primary?.therd}
        >
          {params.user}
        </Typography>{' '}
      </Typography>
      {state === null ? (
        <Box>
          <Typography
            color={primary?.secondary}
            mt={'1rem'}
            variant="h4"
            textAlign={'start'}
          >
            {file.whatIsYourState}
          </Typography>
          <Stack
            justifyContent={'center'}
            marginTop={'2rem'}
            direction={{ xs: 'column' }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => setState({ state: 0, color: '#c62828' })}
              sx={{ margin: { xs: 1, sm: 2, md: 3 }, padding: '10px' }}
            >
              <Typography
                fontWeight={600}
                variant="h5"
              >
                {file.states[0]} 🙁
              </Typography>
            </Button>

            <Button
              variant="contained"
              color="warning"
              onClick={() => setState({ state: 1, color: '#e65100' })}
              sx={{ margin: { xs: 1, sm: 2, md: 3 }, padding: '10px' }}
            >
              <Typography
                fontWeight={600}
                variant="h5"
              >
                {file.states[1]} 🥹
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => setState({ state: 2, color: '#01579b' })}
              sx={{ margin: { xs: 1, sm: 2, md: 3 }, padding: '10px' }}
            >
              <Typography
                fontWeight={600}
                variant="h5"
              >
                {file.states[2]} 😐
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => setState({ state: 3, color: '#1b5e20' })}
              sx={{ margin: { xs: 1, sm: 2, md: 3 }, padding: '10px' }}
            >
              <Typography
                fontWeight={600}
                variant="h5"
              >
                {file.states[3]} 🤣
              </Typography>
            </Button>
          </Stack>
        </Box>
      ) : (
        <>
          <Box>
            {/* <Typography
              color={primary?.secondary}
              mt={'1rem'}
              variant="h4"
              textAlign={'start'}
            >
              {file.yourState}
              <Typography
                variant="h4"
                component={'span'}
                color={state.color}
                fontWeight={600}
              >
                {file.states[state.state]}
              </Typography>
            </Typography> */}
            <Typography
              color={state.color}
              mt={'1rem'}
              variant="h4"
              textAlign={'start'}
            >
              {state.state >= 2
                ? file.publicityFromAnssawer.good
                : file.publicityFromAnssawer.bad}
            </Typography>
            <Typography
              color={primary?.default}
              my={'1rem'}
              variant="h5"
              textAlign={'start'}
            >
              {file.publicity}
            </Typography>
          </Box>
          <LinksToSections cards={file.cardsOfLinks} />
        </>
      )}
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default Home;
