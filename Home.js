// import React, { Component } from 'react';
// import { useForm } from "react-hook-form";
//  class Home extends Component {
//    constructor(){
//      console.log('constructor');
//      super();
// this.state={
//   color:'blue'
// }
//    }
//  Change=()=>{
//    this.setState({color:'red'})
//  }

// //  shouldComponentUpdate(){
// //    return false;
// //  }

//  componentDidMount(){
//    console.log(this.state.color);
//  }
// componentDidUpdate(){
//   console.log("componentDidUpdate");
// }

//   render() {
//     console.log('render');
//     return (
//       <div>Home{this.state.color}
//       <button onClick={this.Change}>click</button>
//       </div>
//     )
//   }
// }

 
// export default Home;

import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      userName:"",
      age:null,
      passWord:"",
      errMsg:""
    }
  }
  handleUserName=(event)=>{
   
    this.setState({[event.target.name]:event.target.value})
  }
  handleAge=(event)=>{
    // console.log(event.target.value);
    if(event.target.name==='age'){
      if(isNaN(event.target.value)){
          this.setState({errMsg:'It should be number only'})
      }
      else{
        this.setState({errMsg:''})
      }

    }
    this.setState({[event.target.name]:event.target.value})
  }
  handlepassWord=(event)=>{
    // console.log(event.target.value);
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit} >
       userName: <input name='username' onChange={this.handleUserName} /><br/><br/>
       age: <input name='age' onChange={this.handleAge} /><br/><br/>
       <p style={{color:'red'}}>{this.state.errMsg}</p><br/>
      passWord:  <input name='password' onChange={this.handlepassWord} /><br/><br/>
      <input type='submit'/>
      </form>
      </>
    )
  }
}
