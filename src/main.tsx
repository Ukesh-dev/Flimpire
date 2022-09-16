import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  colors,
  createTheme,
  PaletteColor,
  PaletteColorOptions,
  ThemeProvider,
} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface Theme {
    ukesh: {
      color: string;
    };
    newUkesh: React.CSSProperties;
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
      ukesh?: string;
    };
    ukesh: {
      color: React.CSSProperties['color'];
    };
    newUkesh?: React.CSSProperties;
  }
  interface Palette {
    neutral?: PaletteColor;
    newUkesh?: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    newUkesh?: PaletteColorOptions;
  }
}

const newTheme = createTheme({
  ukesh: {
    color: colors.orange[200],
  },
  status: {
    danger: '#ff',
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
    },
    newUkesh: {
      main: colors.grey[200],
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={newTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
