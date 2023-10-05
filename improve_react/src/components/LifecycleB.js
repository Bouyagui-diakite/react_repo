import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Bouyagui"
      }
      console.log("LifecycleB constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB getDeriveStateFromProps ");
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentdidMount");
    }


    render() {
        console.log("LifeclecycleB render");
        return (
            <div>
                lifecycleA
            </div>
        );
    }
}

export default LifecycleB;