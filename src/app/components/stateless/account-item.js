import React from 'react';

class AccountItem extends React.Component {

  handleClick (e) {
    e.preventDefault();
    //alert(this.props.account.balance);
    this.props.onClick(this.props.account);
  }

  render () {
    return <li className="account">
      <a onClick={this.handleClick.bind(this)}>{this.props.account.name}</a>
      ${this.props.account.balance}
    </li>;
  }
}

AccountItem.propTypes = {
  account: React.PropTypes.object.isRequired,
};

export default AccountItem;
