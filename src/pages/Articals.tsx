import {
  Paper,
  ThemeOptions,
  Typography,
  Divider,
  Button,
  Box,
} from '@mui/material';
import { Navigate, useOutletContext } from 'react-router';
import { useTheme } from '@emotion/react';
import { OutletContextType } from '../App';
const Articals = () => {
  const { file, isAuthnticate }: OutletContextType = useOutletContext();
  const { primary }: ThemeOptions = useTheme();
  return isAuthnticate ? (
    <Paper
      sx={{
        width: '100%',
        margin: '3em auto  1em',
        padding: '1em',
        direction: file.lang === 'Arabic' ? 'rtl' : 'ltr',
      }}
      elevation={2}
    >
      <Typography
        color={primary?.secondary}
        fontWeight={'bold'}
        variant="h3"
        mb={'1em'}
      >
        {file.paragraphTitle}
      </Typography>
      {file.paragraph.map((para, i) => {
        if (typeof para === 'string') {
          return (
            <Typography
              color={primary?.default}
              textAlign="start"
              variant="h6"
              sx={{
                lineHeight: '2',
                marginBottom: i === file.paragraph.length - 2 ? '2rem' : '1rem',
              }}
            >
              <Typography
                fontWeight={600}
                component={'span'}
                variant="h5"
                color={primary?.secondary}
              >
                {para.slice(0, para.indexOf(' '))}{' '}
              </Typography>
              {para.slice(para.indexOf(' '))}
            </Typography>
          );
        } else {
          return (
            <>
              <Divider
                sx={{
                  background: primary?.therd,
                  margin: '1rem auto ',
                  width: '60%',
                }}
              />
              {para.map((subPara, subIndex) => (
                <Typography
                  color={primary?.default}
                  textAlign="start"
                  variant="h6"
                  sx={{
                    lineHeight: '2',
                    marginBottom:
                      para.length === subIndex + 1 ? '2rem' : '.5rem',
                  }}
                >
                  {subIndex === 0 ? '' : '-'}
                  {subPara}
                </Typography>
              ))}{' '}
            </>
          );
        }
      })}
      <Divider
        sx={{
          background: primary?.secondary,
          margin: '1rem auto ',
          width: '95%',
        }}
      />
      <Divider
        sx={{ background: primary?.therd, margin: '1rem auto ', width: '60%' }}
      />
      <Divider
        sx={{
          background: primary?.secondary,
          margin: '1rem auto ',
          width: '95%',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          alignItems: 'center ',
          justifyContent: 'center',
          gap: '.5em',
          padding: '.75em',
        }}
      >
        <Typography
          variant="h5"
          color={primary?.default}
        >
          {file.pargrapheVideoTitle} :
        </Typography>
        <Button
          target="_blank"
          href="https://youtu.be/O-6f5wQXSu8?si=OCZSMPrFyq-c2nAD"
          sx={{ color: primary?.secondary }}
          size="large"
        >
          {file.cardsOfLinks[0].linkContent}
        </Button>
      </Box>
    </Paper>
  ) : (
    <Navigate to={'/'} />
  );
};

export default Articals;
