import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/Store/Stores';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <BrowserRouter>
 <Toaster
 position="bottom-right"
 reverseOrder={false}/>
    <App />
  </BrowserRouter>
  </Provider>
);
reportWebVitals();
