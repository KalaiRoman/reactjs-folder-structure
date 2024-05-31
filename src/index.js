import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Toaster
 position="bottom-right"
 reverseOrder={false}/>
    <App />
  </>
);
reportWebVitals();
