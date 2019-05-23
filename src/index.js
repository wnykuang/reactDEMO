import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import Whiteboard from './components/Whiteboard'

ReactDOM.render(
    <Whiteboard />,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about services workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
