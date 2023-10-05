import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
import { useState } from 'react';

export class Counter extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          count: 25,
      };
  }
  increment=()=>{
   this.setState({
    //    count:this.state.count+1,
   });
  };
   
   decrement=()=>{
    this.setState({
        // count:this.state.count-1,
    });
     
  };
  render(){
      return(
        <div className="counter">
        
        <div>
      <button onClick={this.decrement}>-</button>
      {/* <span className="count">{this.state.count}</span> */}
      <button onClick={this.increment}>+</button>
      </div>
      </div>
     );
  }
  }

  ReactDOM.render(<Counter/>, document.querySelector("#root"));

