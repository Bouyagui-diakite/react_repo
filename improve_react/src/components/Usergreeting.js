import React, { Component } from "react";

class Usergreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: true,
    };
  }

  render() {
    //-------------------------------------------------------
    //   let message
    //   if(this.state.isloggedIn){
    //       message = <div>Bienvenue Bouyagui</div>
    //   }else{
    //       message = <div>Bienvenue visiteur</div>
    //   }
    //   return <div>{message}</div>
    //--------------------------------------------------------
    // if (this.state.isloggedIn) {
    //   return <h1>Bienvenue Bouyagui</h1>;
    // } else {
    //   return <h1>Bienvenue visiteur</h1>;
    // }
    //------------------------------------------------------------
    return this.state.isloggedIn ? (
      <div>Bienvenu bouyagui</div>
    ) : (
      <div>Bienvenue Visiteur</div>
    );
  }
}

export default Usergreeting;
