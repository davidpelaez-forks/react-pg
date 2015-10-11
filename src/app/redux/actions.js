import * as cnt from './constants'

export function selectAccount(accountName){
  alert(`selection ${accountName}`);
  return {type: cnt.selectAccount, accountName: accountName};
}

export function addTransaction(transaction, accountName){
  alert(`Adding transaction: ${JSON.stringify(transaction)}`);
  return {type: cnt.addTransaction, transaction: transaction, accountName: accountName};
}


  // setCurrentAccount (account) {
  //   let newState = update(this.state, {currentAccount: {$set: account }});
  //   alert(AppStore.xyz);
  //   this.setState(newState);
  // }

  // addTransaction (transaction) {
  //   let newState = update(this.state, {currentAccount: { transactions: {$push: [transaction] }}});
  //   this.setState(newState);
  // }