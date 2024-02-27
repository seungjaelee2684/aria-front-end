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

const initialOptions = {
  "clientId": "AdDsMLWyOpe8ofHhFlrVOM12i8BQXej2M9cJ-R9CDvP07O_kOTZWv7rRrDdR6I651mgEI14toEtMO70I",
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
