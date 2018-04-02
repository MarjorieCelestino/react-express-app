import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import signup from './signup';
import login from './login';
import dashboard from './dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={login}/>
        <Route path="/login" component={login}/>
        <Route path="/signup" component={signup}/>
        <Route path="/dashboard" component={dashboard}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));