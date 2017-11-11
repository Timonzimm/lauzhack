import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import App from './components/App.jsx';

const theme = createMuiTheme();


ReactDOM.render(
<MuiThemeProvider theme={theme}>
  <App /> 
</MuiThemeProvider>,
document.getElementById('root'));