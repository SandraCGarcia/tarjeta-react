import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NewMap from './NewMap';

ReactDOM.render(<NewMap />, document.getElementById('root'));
registerServiceWorker();
