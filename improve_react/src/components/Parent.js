import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    constructor(props) {
      super(props)

      this.greetparent = this.greetparent.bind(this);
    
      this.state = {
         parentName: "Parent"
      }
    }

    greetparent(childName){
        alert(`Bonjour ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <Child greethandler = {this.greetparent}/>
            </div>
        );
    }
}

export default Parent;