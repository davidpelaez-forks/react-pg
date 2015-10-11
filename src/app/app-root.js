import React from 'react';

import AccountsList from './components/account-list';
import TransactionsList from './components/transaction-list';
import Toolbar from './components/toolbar'

import { selectAccount, addTransaction } from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AppRoot extends React.Component {

  //constructor(props) {
  //  super(props);
  //  this.state = 
  //}

  render () {
    if (this.props.accounts.length > 0){
      return <div className="appRoot">
        <AccountsList     accounts={this.props.accounts} 
                          onAccountSelect={this.props.selectAccount}/>
        <TransactionsList account={this.props.accounts[this.props.currentAccount]} 
                          onNewTransaction={this.props.addTransaction}/>
        <Toolbar />
      </div>;
    }else{
      return <div className="appRoot">No accounts to show</div>;
    }
  }
}

// Prop types validation
AppRoot.propTypes = {
  //state: React.PropTypes.object.isRequired,
};

function stateToProps(state){
  return state;
}

function dispatchToProps(dispatch){
  return bindActionCreators({ selectAccount, addTransaction }, dispatch);
}

export default connect(stateToProps,dispatchToProps)(AppRoot);
