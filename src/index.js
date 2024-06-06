import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/Store/Stores';
import ErrorBoundary from './middleware/errorBoundary/ErrorBoundary';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ErrorBoundary>
 <BrowserRouter>
 <Toaster
 position="bottom-right"
 reverseOrder={false}/>
    <App />
  </BrowserRouter>
  </ErrorBoundary>
  </Provider>
);
reportWebVitals();
