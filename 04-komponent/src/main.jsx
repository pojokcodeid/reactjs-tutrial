import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Welcome from "./Welcome.jsx";
import HelloComponent from "./component/HelloComponent.jsx";
import PropClass from "./component/PropClass.jsx";
import Counter from "./component/Counter.jsx";
import EmployeeComponent from "./component/Employee.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Welcome name="Pojok Code" />
    <hr />
    <HelloComponent firstName="Pojok" lastName="Code" />
    <hr />
    <PropClass name="Pojok Code" />
    <hr />
    <Counter />
    <hr />
    <EmployeeComponent />
  </React.StrictMode>
);
