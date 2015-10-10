import cnt from './constants'
import Debug from 'debug';

var debug = Debug('Reducer');

let initialState = {
  currentAccount: undefined,
  accounts: []
};

function reducer (state, action){
  debug("Action received to reduce state", action, state);
  debug("Known constants", cnt);
  switch(action.type){
    case cnt.selectAccount:
      debug("Account selected", action.account);
      return  {accounts: [action.account], currentAccount: action.account};
    default:
      debug(`NO MATCH with ${action.type}`);
      console.log(action);
      return state || initialState;
  } 
}

export default reducer;