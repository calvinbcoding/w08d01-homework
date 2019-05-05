 import React, {Component} from 'react';
import Checking from './';
import './style.css';


class Account extends App {

    render() {
      return (
        <div className="account">
          <h2>{this.props.name}</h2>
          <div className="balance">$0</div>
          <input type="text" placeholder="enter an amount" ref={(input) =>this.inputBox = input}/>
          <input type="button" value="Deposit" />
          <input type="button" value="Withdraw" />
        </div>
      )
    }
  
  

export default Account;

// class  extends Component{
//     constructor(){
//         super();
//         this.state = {
//             list: [
//                 {"name": "Cersei", "motivation": "Being a Lannister"},
//                 {"name": "The Hound", "motivation": "Killing the Butcher's boy"}
//             ]
//         }
//     }
// }
//     deleteListItem = (index) => {
//         const victims = this.state.list;
//         victims.splice(index, 1);
//         this.setState({
//             list: victims
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const name = document.getElementById("name-input").value
//         const motivation =  document.getElementById("motivation-input").value
//         const newVictim = {
//             "name": name,
//             "motivation": motivation
//         }
//         this.setState({
//             list: [...this.state.list, newVictim]
//         })
//         document.getElementById("name-input").value = null;
//         document.getElementById("motivation-input").value = null;
//     }
//     render(){
//         const listItems = this.state.list.map((person, index)=>{
//             return <ToDoListItem number = {index} person={person} delete={this.deleteListItem}></ToDoListItem>
//         })
//         return(
//             <div>
//                 <div className="victim-list">
//                 <h1>Here are the future victims</h1>
//                 <ul>
//                     { listItems }
//                 </ul>
//                 </div>
//                 <div className="victim-form">
//                     <h1>Hi here's a form</h1>
//                     <form onSubmit={this.handleSubmit}>
//                         Name: <input type="text" name="name" id="name-input" />
//                         <br></br>
//                         Reason: <input type="text" name="motivation" id="motivation-input" />
//                         <br></br>
//                         <input type="submit" />
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ToDoContainer;