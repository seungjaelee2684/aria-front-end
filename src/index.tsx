import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

const initialOptions = {
  "clientId": "AfZAeKrvIUkuYe9kAzQuX9xeTZ9IajtoOi1dL9Hwl3jxK3zfOvMYDHZd2oLkUGRF314JA0mOsl6A-1uo",
  currency: "USD",
  intent: "capture",
};

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <PayPalScriptProvider options={initialOptions}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PayPalScriptProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
