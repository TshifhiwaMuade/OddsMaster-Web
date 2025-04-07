import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import AppTheme from './shared-theme/AppTheme';

ReactDOM.render(
  <ThemeProvider theme={AppTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);