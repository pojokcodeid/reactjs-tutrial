import { ListKontak, FormKontak } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
// import RoutePage from "./components/RoutePage";

function App() {
  return (
    <>
      <div className="container">
        <h1>Kontak App</h1>
        <FormKontak />
        <ListKontak />
      </div>
      {/* <RoutePage /> */}
    </>
  );
}

export default App;
