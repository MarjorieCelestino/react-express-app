import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Register';
import HomePage from './HomePage';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/HomePage" component={HomePage}/>
        <Route path="/Register" component={Register}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));