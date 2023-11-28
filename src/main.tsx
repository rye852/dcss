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

declare module '@mui/material' {
  //! if there is a probleme in the type of theme
  //! decomment this code
  // interface Theme {
  //   text: {
  //     primary: string;
  //     secondary: string;
  //     info: string;
  //   };
  // }

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
// theme.typography.h3 = {
//   fontSize: '1.75rem',
//   '@media (min-width:600px)': {
//     fontSize: '2.12rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
//  };
// theme.typography.h4 = {
//   fontSize: '1.5rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.9rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };
theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    action: async ({ request }) => {
      const formData = Object.fromEntries(await request.formData());

      localStorage.setItem('elictronicSafe', JSON.stringify(formData.userName));
      return { state: 'good' };
    },
    children: [
      {
        index: true,
        Component: SignUp,
      },
      {
        path: 'home',
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
