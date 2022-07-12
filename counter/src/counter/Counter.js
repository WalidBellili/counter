import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClickForMinus}>-</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClickForPlus}>+</button>
      </div>
    );
  }
}

export default Counter;
