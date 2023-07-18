import React from "react";

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pojok Code",
      genser: "Laki-laki",
      salary: 100000,
      age: 20,
    };
  }

  changeAge = () => {
    this.setState({
      age: document.getElementById("newAge").value,
    });
  };
  render() {
    return (
      <div>
        <h1>I am Employee</h1>

        <p>
          Name: {this.state.name} <br></br>
          Gender: {this.state.gender} <br></br>
          Salary {this.state.salary} <br></br>
          Age: {this.state.age} <br></br>
        </p>

        <input type="text" id="newAge"></input>

        <button type="button" onClick={this.changeAge}>
          Change Age
        </button>
      </div>
    );
  }
}

export default EmployeeComponent;
