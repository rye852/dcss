import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { languagsEngAr, fileType } from './helpers/languages';
import Footer from './components/Footer';
import { Container } from '@mui/material';

const App = () => {
  const [file, setFile] = useState<fileType>(languagsEngAr[0]);

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

        <Outlet context={file} />
        <Footer />
      </Container>
    </>
  );
};

export default App;
