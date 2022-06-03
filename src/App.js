import { Routes, Route } from "react-router-dom";
import "./App.css";
import Booklist from "./Components/Booklist";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bookstore" element={<Booklist />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
