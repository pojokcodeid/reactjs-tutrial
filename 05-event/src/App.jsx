import Button from "./basic/Contoh1";
import Contoh2 from "./basic/Contoh2";
import MessageWithEvent from "./basic/Message";
import Mydata from "./component/Mydata";
function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Button />
        <Contoh2 />
        <MessageWithEvent name="React" />
        <MessageWithEvent name="React + Vite" />
        <Mydata />
      </div>
    </>
  );
}

export default App;
