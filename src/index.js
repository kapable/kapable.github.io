import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import 'regenerator-runtime/runtime';
import React from 'react';
import {hydrate, render} from 'react-dom';
import './components/TestTypes/Post2021/Post2021.css';
import './components/TestTypes/Post2021/PostPopup.css';
import './components/TestTypes/MetaPangApply/MetaPangApply.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
  <CookiesProvider>
    <App />
  </CookiesProvider>
  , rootElement
  );
} else {
  render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
  , rootElement);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
