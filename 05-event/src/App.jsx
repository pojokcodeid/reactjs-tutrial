import Button from "./basic/Contoh1";
import Contoh2 from "./basic/Contoh2";
import Mydata from "./component/Mydata";
import MessageWithEvent from "./basic/Message";
function App() {
  return (
    <>
      <div>
        {/* ini conoth pertama */}
        <Button />
        {/* ini conoth kedua */}
        <Contoh2 />
        {/* ini conoth ketiga */}
        <MessageWithEvent name="React" />
        <MessageWithEvent name="React + Vite" />
        {/* ini conoth ke empat */}
        <Mydata />
      </div>
    </>
  );
}

export default App;
