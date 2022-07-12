import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log(this);
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
