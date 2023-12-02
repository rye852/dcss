import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  ThemeOptions,
  Divider,
  LinearProgress,
} from '@mui/material';
import { fileType } from '../helpers/languages';

type resultProps = {
  totalValue: number;
  file: fileType;
};

const Result = ({ totalValue, file }: resultProps) => {
  const { primary }: ThemeOptions = useTheme();
  return (
    <Card sx={{ width: '500px', maxWidth: '100%', margin: '100px auto auto' }}>
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
          color={
            totalValue >= 24
              ? '#388e3c'
              : totalValue < 16
              ? '#d32f2f'
              : primary?.secondary
          }
          fontWeight={600}
        >
          {file.score}:
          {file.lang === 'Arabic'
            ? ` %${((totalValue / 2) * 100) / 16}`
            : ` ${((totalValue / 2) * 100) / 16}%`}
        </Typography>
        <LinearProgress
          sx={{
            width: '90%',
            overflow: 'hidden',
            borderRadius: '16px',
            height: '5px',
          }}
          variant="determinate"
          value={((totalValue / 2) * 100) / 16}
          className={
            totalValue >= 24
              ? 'progressParent isgreen'
              : totalValue < 16
              ? 'progressParent isred'
              : 'progressParent'
          }
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
        }}
      >
        <Typography
          variant={'h6'}
          color={primary?.default}
        >
          {totalValue >= 24
            ? file.youAreGood
            : totalValue < 16
            ? file.adviceToContact
            : file.adviceToRead}
        </Typography>
      </CardContent>
      <Divider sx={{ background: primary?.therd, margin: '.5rem 10px ' }} />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link
          to={
            totalValue >= 24
              ? '/' + file.cardsOfLinks[1].herf
              : totalValue < 16
              ? '/' + file.cardsOfLinks[2].herf
              : '/' + file.cardsOfLinks[1].herf
          }
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: '600',
              background: primary?.therd,
              color: primary?.main,
            }}
          >
            {totalValue >= 24
              ? file.resultLink[2]
              : totalValue < 16
              ? file.resultLink[1]
              : file.resultLink[2]}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Result;
