import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { languagsEngAr, fileType } from './helpers/languages';
import Footer from './components/Footer';
import { Container } from '@mui/material';

export type OutletContextType = {
  file: fileType;
  isAuthnticate: boolean;
  setIsAuthnticate: React.Dispatch<React.SetStateAction<boolean>>;
};
const App = () => {
  const [file, setFile] = useState<fileType>(languagsEngAr[0]);
  const [isAuthnticate, setIsAuthnticate] = useState<boolean>(false);
  return (
    <>
      <Container
        className="forcePadding0"
        sx={{
          position: 'relative',
          height: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <NavBar
          file={file}
          setFile={setFile}
        />

        <Outlet context={{ file, isAuthnticate, setIsAuthnticate }} />
        <Footer />
      </Container>
    </>
  );
};

export default App;
