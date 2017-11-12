import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import Root from './components/Root.jsx';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));