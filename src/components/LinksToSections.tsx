import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { ThemeOptions } from '@mui/material';
import { cardType } from '../helpers/languages';
import { Link } from 'react-router-dom';
const LinksToSections = ({ cards }: { cards: cardType[] }) => {
  const { primary }: ThemeOptions = useTheme();
  console.log(cards);
  return (
    <Stack
      direction={'column'}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      {cards.map((card, key) => (
        <Card
        elevation={4}
          key={key}
          sx={{
            maxWidth: '100%',
            margin: ' auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            borderRadius: '30px',
          }}
        >
          <CardContent sx={{ pb: '0' }}>
            <Typography
              component={'p'}
              variant="subtitle1"
              color={primary?.default}
            >
              {card.cardContent}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', paddingTop: 0 }}>
            <Link to={`/${card.herf}`}>
              <Button
                sx={{ color: primary?.secondary }}
                size="large"
              >
                {card.linkContent}
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};

export default LinksToSections;
