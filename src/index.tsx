import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.css';
import reportWebVitals from './test/reportWebVitals';
import Root from './Root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


reportWebVitals();
