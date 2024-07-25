import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/Store/Stores';
import ErrorBoundary from './middleware/errorBoundary/ErrorBoundary';
import ProvideContext from './contextapi/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ErrorBoundary>
 <BrowserRouter>
 <ProvideContext>
 <Toaster
 position="bottom-right"
 reverseOrder={false}/>
    <App />
    </ProvideContext>
  </BrowserRouter>
  </ErrorBoundary>
  </Provider>
);
reportWebVitals();
