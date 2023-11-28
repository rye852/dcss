import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from '@emotion/react';
import { ThemeOptions } from '@mui/material/styles';
import {  useState } from 'react';

//? my Imports
import { fileType, langType, languagsEngAr } from '../helpers/languages';
import LanguageList from './LanguagesList';


type navBarProps = {
  file: fileType;
  setFile: React.Dispatch<React.SetStateAction<fileType>>;
};

const NavBar = ({ file, setFile }: navBarProps) => {
  const { primary }: ThemeOptions = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeLang = (lang: langType = file.lang, id?: number): void => {
    setIsOpen((prev) => !prev);
    if (file.lang === lang) return console.log('sgiiiit');
    if (id !== undefined) setFile(languagsEngAr[id]);
  };
 
  return (
    <AppBar
      sx={{ background: primary?.secondary }}
      position="fixed"
    >
      <Toolbar
        className="cssForce"
        sx={{ p: 0 }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          width={'fit-content'}
          px={'16px'}
          position={'relative'}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
            onClick={() => changeLang()}
          >
            <LanguageIcon />
          </IconButton>
          <LanguageList
            isOpen={isOpen}
            changeLang={changeLang}
          />
        </Grid>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, transform: 'translateX(-16px)' }}
        >
          {file.NavBar}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
