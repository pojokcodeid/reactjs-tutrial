import React from "react";

class Counter extends React.Component {
  // inisialisasi state dengan nilai awal
  state = {
    count: 0,
  };

  // fungsi untuk menambahkan nilai state
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // fungsi untuk mengurangi nilai state
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
