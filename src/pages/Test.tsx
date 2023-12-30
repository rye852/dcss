import { useOutletContext, Navigate } from 'react-router';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  ThemeOptions,
  Divider,
  LinearProgress,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useTheme } from '@emotion/react';

import Result from '../components/Result';
import { OutletContextType } from '../App';
const Test = () => {
  const { file, isAuthnticate }: OutletContextType = useOutletContext();
  const { primary }: ThemeOptions = useTheme();
  const [isOpen, setIsopen] = useState<boolean>(true);
  const [isDesibeld, setIsDesibeld] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [value, setValue] = useState<number | null>(null);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [noCheck, setNoCheck] = useState<boolean>(true);
  const [Cheked1, setCheked1] = useState<boolean>(false);
  const [Cheked2, setCheked2] = useState<boolean>(false);
  const [Cheked3, setCheked3] = useState<boolean>(false);

  const nextHndler = (): void => {
    if (value === null) {
      setNoCheck(false);
      setTimeout(() => {
        setNoCheck(true);
      }, 400);
      return;
    }
    setIsopen(false);
    setValue(null);
    setIsDesibeld(true);
    setTotalValue((prev) => prev + value);

    setTimeout(() => {
      setCheked1(false);
      setCheked2(false);
      setCheked3(false);
      setTimeout(() => {
        setIsDesibeld(false);
      }, 300);
      setIndex((prev) => prev + 1);
      setIsopen(true);
    }, 300);
  };

  return isAuthnticate ? (
    index !== file.testQuestions.length ? (
      <Card
        className={noCheck ? '' : 'chek'}
        sx={{ width: '500px', maxWidth: '100%', margin: '100px auto auto' }}
      >
        <CardActions
          sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '16px',
            marginY: '.25em',
          }}
        >
          <Typography
            variant={'h6'}
            color={primary?.secondary}
            fontWeight={600}
          >
            {file.progress}:{' '}
            <Typography color={primary?.therd}>
              {index + 1}/{file.testQuestions.length}
            </Typography>
          </Typography>
          <LinearProgress
            sx={{
              width: '90%',
              overflow: 'hidden',
              borderRadius: '16px',
              height: '5px',
            }}
            variant="determinate"
            value={(index * 100) / 16}
            className="progressParent"
          />
        </CardActions>
        <Divider sx={{ background: primary?.therd, margin: '.5rem 10px ' }} />
        <CardContent
          sx={{
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '100%',
            width: '500px',
            pointerEvents: isDesibeld ? 'none' : 'auto',
          }}
          className={isOpen ? 'isOpen' : 'isClosed'}
        >
          <Typography
            variant={'h6'}
            color={primary?.default}
          >
            {file.testQuestions[index].content}
            {file.lang === 'Arabic' ? ' ؟' : ' ?'}
          </Typography>
          <RadioGroup
            row
            aria-labelledby="chose"
            name="chocise"
            sx={{ justifyContent: 'center', marginTop: '.5em' }}
          >
            <FormControlLabel
              value={0}
              sx={{ color: '#d32f2f', fontWeight: 600 }}
              className="labelforce"
              control={
                <Radio
                  checked={Cheked1 || false}
                  onClick={() => {
                    setCheked1((prv) => !prv);
                    setCheked3(false);
                    setCheked2(false);
                    !Cheked1 ? setValue(0) : setValue(null);
                  }}
                  sx={{
                    color: '#d32f2f',
                    '&.Mui-checked': {
                      color: '#d32f2f',
                    },
                  }}
                />
              }
              label={file.cardOptions[0]}
            />
            <FormControlLabel
              value={1}
              sx={{ color: '#0288d1', fontWeight: 600 }}
              className="labelforce"
              control={
                <Radio
                  checked={Cheked2 || false}
                  onClick={() => {
                    setCheked2((prv) => !prv);
                    setCheked3(false);
                    setCheked1(false);
                    !Cheked2 ? setValue(1) : setValue(null);
                  }}
                  sx={{
                    color: '#0288d1',
                    '&.Mui-checked': {
                      color: '#0288d1',
                    },
                  }}
                />
              }
              label={file.cardOptions[1]}
            />
            <FormControlLabel
              value={2}
              sx={{ color: '#388e3c', fontWeight: 600 }}
              className="labelforce"
              control={
                <Radio
                  checked={Cheked3 || false}
                  onClick={() => {
                    setCheked3((prv) => !prv);
                    setCheked1(false);
                    setCheked2(false);
                    !Cheked3 ? setValue(2) : setValue(null);
                  }}
                  sx={{
                    color: '#388e3c',
                    '&.Mui-checked': {
                      color: '#388e3c',
                    },
                  }}
                />
              }
              label={file.cardOptions[2]}
            />
          </RadioGroup>
        </CardContent>
        <Divider sx={{ background: primary?.therd, margin: '.5rem 10px ' }} />
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button
            onClick={() => nextHndler()}
            variant="contained"
            size="large"
            disabled={isDesibeld}
            sx={{
              fontWeight: '600',
              background: primary?.therd,
              color: primary?.main,
            }}
          >
            {file.btnCard}
          </Button>
        </CardActions>
      </Card>
    ) : (
      <Result
        file={file}
        totalValue={totalValue}
      />
    )
  ) : (
    <Navigate to="/" />
  );
};

export default Test;
