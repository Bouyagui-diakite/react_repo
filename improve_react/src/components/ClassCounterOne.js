import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `you clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.count !== this.state.count){
          console.log("updation document title");
        document.title = `you clicked ${this.state.count} times`;         
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked {this.state.count} times
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
      </div>
    );
  }
}

export default ClassCounterOne;
