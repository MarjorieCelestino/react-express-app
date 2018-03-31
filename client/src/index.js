import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Register';
import HomePage from './HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Register />, document.getElementById('root'));
registerServiceWorker();
