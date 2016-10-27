import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MuiWrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);


describe('Test suite for App', () => {
  beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Full App renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiWrapper />, div);
  });
});
