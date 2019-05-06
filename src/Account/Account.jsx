import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      blance: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  updateBalance = () => {
    const balance = this.state.balance;
    this.setState({
      balance: event.target.balance});
  }

  handleSubmit(event) {
    alert('Your Balance was updated to: ' + this.state.balance);
    event.preventDefault();
  }
    render()  {
      return (
        <form onSubmit={this.handleSubmit}>
        </form>

        <div className="account">
          <h2>{this.props.name}</h2>
          
          <div name="balance">
          <h3>{this.state.balance}</h3></div>
          
          <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox/>
          <input type="button" value="Deposit" />
          <input type="button" value="Withdraw" />
        </div>
      )
    }
  }

export default Account;


