import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import LoadUserContainer from '@/container/LoadUserContainer/LoadUserContainer';

import dotenv from 'dotenv';
import store from './core/redux/store';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LoadUserContainer>
        <App />
      </LoadUserContainer>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
