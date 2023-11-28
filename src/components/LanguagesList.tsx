import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import { ThemeOptions } from '@mui/material/styles';

//? my Imports
import { langType } from '../helpers/languages';

type LanguageListProps = {
  isOpen: boolean;
  changeLang: (lang?: langType, id?: number) => void;
};

const LanguageList = ({ isOpen, changeLang }: LanguageListProps) => {
  const { primary }: ThemeOptions = useTheme();
  return (
    <Paper
      className={isOpen ? 'isOpen' : 'isClosed'}
      elevation={2}
      sx={{
        color: primary?.main,
        background: primary?.secondary,
        position: 'absolute',
        transition: '.3s',
        top: '100%',
        right: '-10%',
      }}
    >
      <ListItem
        key={0}
        component="div"
        disablePadding
        onClick={() => changeLang('English', 0)}
      >
        <ListItemButton>
          <ListItemText
            sx={{ textAlign: 'center' }}
            primary={`English`}
          />
        </ListItemButton>
      </ListItem>
      <ListItem
        key={1}
        component="div"
        disablePadding
        onClick={() => changeLang('Arabic', 1)}
      >
        <ListItemButton>
          <ListItemText
            sx={{ textAlign: 'center' }}
            primary={`Arabic`}
          />
        </ListItemButton>
      </ListItem>
    </Paper>
  );
};

export default LanguageList;
