'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Master from './components/Master';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router} from 'react-router';
import AppRoutes from './AppRoutes';
import createHistory from 'history/lib/createHashHistory';

(() => {
  injectTapEventPlugin();
  let div = document.getElementById('app');
  ReactDOM.render(<Router history={createHistory({queryKey: true})}>{AppRoutes}</Router>, div);
})();
