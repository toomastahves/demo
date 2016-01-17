import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';

import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Gallery from './components/Pages/Gallery';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Todo from './components/Pages/Todo';

import createHistory from 'history/lib/createHashHistory';

const Routes = (
  <Router history={createHistory({ queryKey: false })}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='blog' component={Blog} />
      <Route path='gallery' component={Gallery} />
      <Route path='home' component={Home} />
      <Route path='login' component={Login} />
      <Route path='todo' component={Todo} />
    </Route>
  </Router>
);

export default Routes;
