import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18next'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import LocaleReducer from './redux/Features/locale';
import Loader from './components/compound/loader';

const store = configureStore({
  reducer: {
    locale: LocaleReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
);