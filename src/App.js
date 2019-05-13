import dotenv from 'dotenv';
import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';

dotenv.config();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}

export default App;
