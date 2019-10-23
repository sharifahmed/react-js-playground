import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import App2 from './containers/App2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App2/>, document.getElementById('root'));
registerServiceWorker();
