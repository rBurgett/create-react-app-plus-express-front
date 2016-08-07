import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './components/home';
import JsonExample from './components/json-example';
import SocketExample from './components/socket-example';
import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Router path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Router path="json-example" component={JsonExample}></Router>
            <Router path="socket-example" component={SocketExample}></Router>
        </Router>
    </Router>,
  document.getElementById('root')
);
