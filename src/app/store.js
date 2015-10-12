//import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './redux/reducer'
window.reducer = reducer;


import Debug from 'debug';
var debug = Debug('Store');

const loggerMiddleware = store => next => action => {
  debug('dispatching', action);
  let result = next(action);
  debug('next state', store.getState());
  return result;
};


//const loggerMiddleware = createLogger({logger: debug});

const createStoreWithMiddleware = applyMiddleware(
  //thunkMiddleware, // lets us dispatch() functions
  promiseMiddleware,
  loggerMiddleware // neat middleware that logs actions
)(createStore);

let finalStore = createStoreWithMiddleware(reducer);

import * as actions from './redux/actions';
finalStore.actions = actions;
finalStore.Promise = Promise;
finalStore.resolver = function(resolve, reject) {
  setTimeout(()=>resolve('aloha'),1000);
}

export default finalStore;
