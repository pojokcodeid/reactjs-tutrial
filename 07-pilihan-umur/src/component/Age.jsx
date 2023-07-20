import React from "react";

class Age extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pojok Code",
      gender: "Laki-laki",
      age: 0,
      acess: "input Tanggal Lahir",
    };
  }

  checkAge = () => {
    let tlahir = document.getElementById("newAge").value;
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(tlahir).getTime();
    let difference = currentTime - birthDateTime;
    let ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    let message = "";
    if (ageInYears >= 18) {
      message = "Anda Sudah Berhak untuk Masuk";
    } else {
      message = "Anda Tidak Berhak untuk Masuk";
    }
    this.setState({
      age: ageInYears,
      acess: message,
    });
  };
  render() {
    return (
      <div>
        <h1>Hello Pengecekan Acess Dengan Umur</h1>
        <p>
          Name: {this.state.name} <br></br>
          Gender: {this.state.gender} <br></br>
          Age: {this.state.age} <br></br>
        </p>
        <h1>{this.state.acess}</h1>
        <input type="date" id="newAge"></input>&nbsp;
        <button type="button" onClick={this.checkAge}>
          Cek Umur
        </button>
      </div>
    );
  }
}

export default Age;
