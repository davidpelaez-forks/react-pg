import React from 'react';
//import TransactionsItem from './TransactionsItem';

class TransactionsList extends React.Component {

  addTransactionHandler (e) {
    e.preventDefault();
    let transaction = {
      amount: parseInt(this.refs.amount.value),
      description: this.refs.description.value.trim()
    }
    this.refs.amount.value = '';
    this.refs.description.value = '';
    this.props.onNewTransaction(transaction);
    return;
  }

  render () {
    return <div className="transactions-list">
      <h2>Transactions in {this.props.account.name}</h2>
      
      { this.props.account.transactions.map( t => {
        return <p key={t.amount}>{t.amount}</p>
      })}
    </div>;
  }
}

TransactionsList.propTypes = {
  account: React.PropTypes.object.isRequired,
  onNewTransaction: React.PropTypes.func.isRequired
};

export default TransactionsList;
