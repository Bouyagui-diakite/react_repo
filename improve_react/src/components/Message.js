import React, { Component } from 'react';

class Message extends Component {
    constructor(){
        super();

        this.state ={
           Message:"Bienvenue Bouyagui" 
        }
    }
    changeMessage(){
        this.setState({
            Message:"Merci d'etre passer"
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Clique-moi</button>
            </div>
        );
    }
}

export default Message;