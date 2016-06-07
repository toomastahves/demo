import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/';
import '../public/styles/index.css';

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
