import React from 'react';

import AccountsList from './components/account-list';
import TransactionsList from './components/transaction-list';
import Toolbar from './components/toolbar'

import { selectAccount, addTransaction, loadAccounts } from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import _ from 'underscore';
class AppRoot extends React.Component {

  //constructor(props) {
  //  super(props);
  //  this.state = 
  //}

  componentDidMount () {
    console.log("LOADING!!!");
    this.props.loadAccounts();
  }

  haveAccounts (){
    return _.keys(this.props.accounts).length > 0;
  }

  // render () {
  //   return <div className="appRoot">{this.props.accounts ? _.keys(this.props.accounts).length : 0}</div>;
  // }

  render () {
    var output;
    if (this.haveAccounts()){
      //console.log("SKIPPING");
      return (
        <div className="appRoot"><h1>aloha</h1>
              <AccountsList accounts={this.props.accounts} 
                                onAccountSelect={this.props.selectAccount}/>
                                <TransactionsList account={this.props.accounts[this.props.currentAccount]} 
                                onNewTransaction={this.props.addTransaction}/>
                          </div>
            );
              //return {JSON.stringify(this.props)};
              
              
              // <Toolbar />
            
    }else{
      return (<div className="appRoot">No accounts to show</div>);
    }
    // console.log("OUT",output);
    // return ({output});
  }
}

// Prop types validation
AppRoot.propTypes = {
  //state: React.PropTypes.object.isRequired,
};

function stateToProps(state){
  //alert("STATE!");
  console.log(state);
  return state;
}

function dispatchToProps(dispatch){
  return bindActionCreators({ selectAccount, addTransaction, loadAccounts }, dispatch);
}

export default connect(stateToProps,dispatchToProps)(AppRoot);
