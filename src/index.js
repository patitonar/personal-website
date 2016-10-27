import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './assets/font-awesome/css/font-awesome.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MuiWrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MuiWrapper />,
  document.getElementById('root')
);
