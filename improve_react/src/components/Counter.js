import React, { Component } from "react";



class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("increment value:", this.state.count);
    //   }
    //si l'on doit executer du code apres la mis a jour de la state, il faut creer un callback function
    //et le passer en parametre au setstate()
    // );
    this.setState((prevcount) =>({
        count: prevcount.count +1

    }))
    console.log(this.state.count);

  }

  incrementfive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
  }

  render() {
    return (
      <div>
        count: {this.state.count}
        <button
          onClick={() => {
            this.incrementfive();
          }}
        >
          Incrementer
        </button>
      </div>
    );
  }
}

export default Counter;
