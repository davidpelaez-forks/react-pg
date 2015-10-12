import React from 'react';
import AccountItem from './stateless/account-item';
import _ from 'underscore';

class AccountList extends React.Component {

  accountsArray (){
    return _.map(this.props.accounts,(data,name)=>{
      return _.extend({id: name}, data);
    });
  }

  itemNodes (){
    return this.accountsArray().map( item => {
      return <AccountItem account={item} key={item.name} onClick={this.props.onAccountSelect}/>;
    });
  }

  render () {
    window.React = React;
    return (<div className="accounts-list">
      <h2>Accounts</h2>
      {this.itemNodes()}
    </div>);
  }
}

AccountList.propTypes = {
  accounts: React.PropTypes.object.isRequired,
  onAccountSelect: React.PropTypes.func.isRequired
};

export default AccountList;
