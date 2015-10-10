import React from 'react';
import AccountItem from './stateless/account-item';

class AccountList extends React.Component {

  //componentDidMount () {
    //alert(JSON.stringify(this.props));
    //this.props.onAccountSelect();
  //}

  

  render () {
    return <div className="accounts-list">
      <h2>{this.props.title} Accounts</h2>
      
      <ul>
        {this.props.accounts.map((item) => {
            return <AccountItem account={item} key={item.name} onClick={this.props.onAccountSelect}/>;
          })
        }
      </ul>
    </div>;
  }
}

AccountList.propTypes = {
  accounts: React.PropTypes.array.isRequired,
};

export default AccountList;
