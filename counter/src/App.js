import React, { Component } from "react";
import Counter from "./counter/Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(this.state.count2);
  }
  //************************************** */
  handleClickForPlus = (e) => {
    let dynamiqueNumberPlus = this.state.count + 1;
    this.setState({ count: dynamiqueNumberPlus });
  };
  handleClickForMinus = (e) => {
    if (this.state.count > 0) {
      let dynamiqueNumberMinus = this.state.count - 1;
      this.setState({ count: dynamiqueNumberMinus });
    }

    handleCounters = (e) => {};
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter
          count={this.state.count}
          increment={this.handleClickForPlus}
          decrement={this.handleClickForMinus}
        />
        <Counter
          count={this.state.count}
          increment={this.handleClickForPlus}
          decrement={this.handleClickForMinus}
        />
      </div>
    );
  }
}

export default App;
