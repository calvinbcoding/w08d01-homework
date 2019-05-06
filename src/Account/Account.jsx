import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDepositClick = (e) => {
      e.preventDefault();
      const amount = parseInt(this.inputBox.value);
      console.log(amount);
      this.setState({
        balance: this.state.balance + amount
      })
    }
    handleWithdrawClick = (e) => {
      e.preventDefault();
      const amount = parseInt(this.inputBox.value);
      console.log(amount);
      this.setState({
        blance: this.state.balance - amount
      })
    }
      
  render(){
      let balanceClass = 'balance';
      if(this.state.balance === 0){ 
        balanceClass += ' zero';
      }
      return (
        

          <div className="account">
            <h2>{this.props.name}</h2> 
          <div className={balanceClass}>{this.state.balance}</div>
           
          <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
          <input type="button" value="Deposit" onClick={this.handleDepositClick}/>
          <input type="button" value="Withdraw" onClick={this.handleWithdrawClick}/></div>
        )
  
    }
  } 

export default Account;


