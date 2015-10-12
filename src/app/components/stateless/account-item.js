import React from 'react';

class AccountItem extends React.Component {

  handleClick (e) {
    e.preventDefault();
    this.props.onClick(this.props.account.id);
  }

  render () {
    // return <li className="account">
    //   <a onClick={this.handleClick.bind(this)}>{this.props.account.name}</a>
    //   ${this.props.account.balance}
    // </li>;
    // return ["aloha:",this.props.key];
    return (<a onClick={this.handleClick.bind(this)}>{this.props.account.id}</a>);
  }
}

AccountItem.propTypes = {
  account: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default AccountItem;
