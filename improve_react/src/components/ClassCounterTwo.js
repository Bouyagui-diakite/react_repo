import React, { Component } from 'react';

class ClassCounterTwo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment =() =>{
        this.setState(prevstate =>{
            return{
                count: prevstate.count +1
            }
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.increment}>count: {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounterTwo;