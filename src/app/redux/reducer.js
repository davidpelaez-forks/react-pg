import * as cnt from './constants'
import Debug from 'debug';
import { initialDefaultState } from '../defaults';

var debug = Debug('Reducer');

function reducer (state=initialDefaultState, action){
  debug("Action received to reduce state", action);
  switch(action.type){
    case cnt.loadAccounts:
      return  Object.assign({},state,action.payload);
    case cnt.selectAccount:
      debug("Account selected", action.account);
      //return  {accounts: [action.account], currentAccount: action.account};
      return  Object.assign({},state,{currentAccount: action.payload});
    default:
      debug(`NO MATCH with ${action.type}`);
      console.log(action);
      return state;
  } 
}

export default reducer;
