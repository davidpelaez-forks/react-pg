import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './redux/reducer'
window.reducer = reducer;

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  //thunkMiddleware, // lets us dispatch() functions
  promiseMiddleware,
  loggerMiddleware // neat middleware that logs actions
)(createStore);


export default createStoreWithMiddleware(reducer);
