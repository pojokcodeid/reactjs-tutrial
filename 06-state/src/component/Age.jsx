import React from "react";

class Age extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pojok Code",
      gender: "Laki-laki",
      age: 0,
      acess: "Input Tanggal Lahir",
    };
  }

  checkAge = () => {
    let tlahir = document.getElementById("newAge").value;
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(tlahir).getTime();
    let difference = currentTime - birthDateTime;
    let ageInYear = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    let message = "";
    if (ageInYear >= 18) {
      message = "Anda sudah berhak untuk mengacessnya";
    } else {
      message = "Anda belum berhak untuk mengacessnya";
    }
    this.setState({
      acess: message,
      age: ageInYear,
    });
  };

  render() {
    return (
      <div>
        <h1>Pengecekan Acess Dengan Umur</h1>
        <p>
          Name : {this.state.name} <br />
          Gender : {this.state.gender} <br />
          Age : {this.state.age} <br />
        </p>
        <h2>{this.state.acess}</h2>
        <input type="date" id="newAge" /> &nbsp;
        <button type="button" onClick={this.checkAge}>
          Check Umur
        </button>
      </div>
    );
  }
}

export default Age;
