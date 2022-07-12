import React, { Component } from "react";
import Counter from "./counter/Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //************************************** */
  handleClickForPlus = (e) => {
    let dynamiqueNumberPlus = this.state.count + 1;
    this.setState({ count: dynamiqueNumberPlus });
  };
  handleClickForMinus = (e) => {
    let dynamiqueNumberMinus = this.state.count - 1;
    this.setState({ count: dynamiqueNumberMinus });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
