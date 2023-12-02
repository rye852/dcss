// ? libiries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ? my imports
import App from './App.tsx';
import './CSS/index.css';
import './CSS/important.css';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import Test from './pages/Test.tsx';
import Articals from './pages/Articals.tsx';
import Contact from './pages/Contact.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

declare module '@mui/material' {
  export interface ThemeOptions {
    primary?: {
      default?: string;
      main?: string;
      secondary?: string;
      therd?: string;
    };
  }
}

let theme = createTheme({
  primary: {
    default: '#111',
    main: '#fff',
    secondary: '#1976d2',
    therd: '#29b6f6',
  },
});

theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,

    children: [
      {
        index: true,
        Component: SignUp,
      },
      {
        path: 'home/:user',
        Component: Home,
      },
      {
        path: 'test',
        Component: Test,
      },
      {
        path: 'articals',
        Component: Articals,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
