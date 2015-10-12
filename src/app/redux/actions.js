import { createAction } from 'redux-actions';
import * as cnt from './constants';
import * as API from './api';

export let loadAccounts = createAction(cnt.loadAccounts, API.loadAccounts);
export let selectAccount = createAction(cnt.selectAccount);
export let addTransaction = createAction(cnt.addTransaction);


  // setCurrentAccount (account) {
  //   let newState = update(this.state, {currentAccount: {$set: account }});
  //   alert(AppStore.xyz);
  //   this.setState(newState);
  // }

  // addTransaction (transaction) {
  //   let newState = update(this.state, {currentAccount: { transactions: {$push: [transaction] }}});
  //   this.setState(newState);
  // }