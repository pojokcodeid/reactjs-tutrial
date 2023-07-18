import React from "react";
import "./css/style.css";
import ChildComponent from "./ChildComponet";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="itemStyle">
        <h1>Hello {this.props.name}</h1>
        <ChildComponent />
      </div>
    );
  }
}

export default Welcome;
