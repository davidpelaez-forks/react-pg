import React from 'react';
import update from 'react-addons-update';
import AccountsList from './components/account-list';
import TransactionsList from './components/transaction-list';
import Toolbar from './components/toolbar'

class AppRoot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        {
          name: "A", 
          transactions: [
            {amount: -100, description: 'debit'},
            {amount: 500, description: 'credit'}
          ]
        },
        {
          name: "B", 
          transactions: [
            {amount: -100, description: 'debit'},
            {amount: -800, description: 'debit'}
          ]
        },
        {
          name: "C", 
          transactions: [
            {amount: 1000, description: 'credit'},
            {amount: 1060, description: 'credit'}
          ]
        }
      ],
      currentAccount: {
          name: "C", 
          transactions: [
            {amount: 1000, description: 'credit'},
            {amount: 1060, description: 'credit'}
          ]
        }
    };
  }

  setCurrentAccount (account) {
    let newState = update(this.state, {currentAccount: {$set: account }});
    alert(AppStore.xyz);
    this.setState(newState);
  }

  addTransaction (transaction) {
    let newState = update(this.state, {currentAccount: { transactions: {$push: [transaction] }}});
    this.setState(newState);
  }

  render () {
    return <div className="appRoot">
      
      <Toolbar />
      
    </div>;
  }
}

// Prop types validation
AppRoot.propTypes = {
  //state: React.PropTypes.object.isRequired,
};

/*
// <AccountsList     accounts={this.state.accounts} 
      //                   onAccountSelect={this.setCurrentAccount.bind(this)}/>
      // <TransactionsList account={this.state.currentAccount} 
      //                   onNewTransaction={this.addTransaction.bind(this)}/>
      
      */
export default AppRoot;
