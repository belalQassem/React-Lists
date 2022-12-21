import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counters from './pages/Counters';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counters/>
  </React.StrictMode>
);