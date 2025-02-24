import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LdtApp from './LdtApp';
import reportWebVitals from './reportWebVitals';

const LdtRoot = ReactDOM.createRoot(document.getElementById('LdtRoot'));
LdtRoot.render(
  <React.StrictMode>
    <LdtApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
