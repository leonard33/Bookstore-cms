import "./App.css";
import Booklist from "./Components/Booklist";
import Form from "./Components/Form";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Booklist />
      <Form />
    </div>
  );
}

export default App;
