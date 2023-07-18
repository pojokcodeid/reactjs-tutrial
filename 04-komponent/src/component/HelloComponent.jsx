import DemoComp from "./DemoComp";
function HelloComponent(props) {
  return (
    <div>
      <h1>First Name : {props.firstName}</h1>
      <h1>Last Name : {props.lastName}</h1>
      <DemoComp message="Hello World" />
    </div>
  );
}

export default HelloComponent;
