import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createMainTheme } from './theme';
import { SETTINGS } from './constants';
import routes, { renderRoutes } from 'src/routes';

const App = () => {
  const theme = createMainTheme({
    direction: SETTINGS.direction,
    responsiveFontSizes: SETTINGS.responsiveFontSizes,
    theme: SETTINGS.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
};

export default App;
