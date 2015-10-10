import Debug from 'debug';
import React from 'react';
//import ReactDOM from 'react-dom';
//import App from '../../app/app';
//ReactDOM.render(<App/>,attachElement);

Debug.enable('*');

let attachElement = document.getElementById('app');

import AppRoot from '../../app/app-root';
import { Provider } from 'react-redux';
import store from '../../app/store';
// Why does using react dom generate invarian ref error?
// https://gist.github.com/jimfb/4faa6cbfb1ef476bd105
React.render(<Provider store={store}><AppRoot/></Provider>,attachElement);
