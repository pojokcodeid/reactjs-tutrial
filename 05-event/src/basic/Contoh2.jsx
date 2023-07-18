import React, { Component } from "react";

class Contoh2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ backgroundColor: "red" });
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.backgroundColor }}>
        <button onClick={this.handleButtonClick}>Ubah Warna</button>
      </div>
    );
  }
}

export default Contoh2;
