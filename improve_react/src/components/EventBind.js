import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          Message: "Bonjour"
         
      }

      //3eme approche
      this.changeMe = this.changeMe.bind(this)
    }

    //notre fonction principale
    // changeMe(){
    //     this.setState({
    //         Message:"Au revoir"
    //     })
    // }

    //4eme approche:
    changeMe = () =>{
        this.setState({
            Message: "Au revoir"
        })
        console.log(this);
    }

//4 approche nous permettent de changer l'etat de notre state sur le buuton:
// on peut utiliser bind this.changeMe.bind(this) 
// ou une fonction flechee. {() =>{this.changeMe()}}
//la 3eme approche (la plus utilisee) est de faire un bind directement a l'interieur du constructeur
//et dans le button faire un this.changeMe
//la 4eme approche est de faire de notre fonction principale une fonction flechee.et dans le button faire un this.changeMe
//les approches 3 et 4 sont les plus recommandees et les plus utilises.
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                {/*1) <button onClick={this.changeMe.bind(this)}>Click</button> */}
                {/*2) <button onClick={() =>{this.changeMe()}}>Clique</button> */}
                {/* 3 et 4*/}<button onClick={this.changeMe}>Click</button>
                
            </div>
        );
    }
}

export default EventBind;