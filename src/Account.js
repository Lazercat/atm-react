import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props);

    // bind event handlers
    this.handleDepositClick = this.handleDepositClick.bind(this);
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this);
    this.state = {
      balance: 0,
    }

  }

  handleDepositClick(e) {
    e.preventDefault();

    let amount = this.inputBox.value;
    let newBalance = this.state.balance + amount;

    this.setState({
      balance: parseFloat(newBalance)
    });

    this.inputBox.value = '';
    console.log('handleDepositClick clicked', newBalance);
  }

  handleWithdrawClick(e) {
    e.preventDefault();

    let amount = this.inputBox.value;
    let newBalance = this.state.balance - amount;

    if(parseFloat(newBalance)<0){
      alert('Insufficient Funds for transaction');
      newBalance = this.state.balance;
    } else {
      this.setState({
        balance: parseFloat(newBalance)
      });
    }

    this.inputBox.value = '';
  }



  render() {
      // set the default class to `balance` for the balanceClass.
      let balanceClass = 'balance';
      // if the balance is 0, then add the class zero to balanceClass
      if (this.state.balance === 0) {
        balanceClass += ' zero';
      }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input)=> this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}
