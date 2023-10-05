import React, { Component } from 'react';
import LifecycleB from "./LifecycleB"

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Bouyagui"
      }
      console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDeriveStateFromProps ");
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentdidMount");
    }


    render() {
        console.log("LifeclecycleA render");
        return (
            <div>
                lifecycleA
                <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA;