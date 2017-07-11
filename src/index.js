import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from './App';
import { renderStatic } from 'glamor/server';

export default renderStatic(() =>  ReactDOMServer.renderToStaticMarkup(<App />));