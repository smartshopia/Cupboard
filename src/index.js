// import ReactDOM from 'react-dom';
import './style.css';
import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  document.getElementById('app')
);

root.render(<App />);

