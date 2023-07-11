import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Menu from "./view/menu";
import Motd from "./view/motd";
import About from "./view/about";
import Contact from "./view/contact";
import _header from "./components/header";

function App() {
  return (
    <div className="App">
      <_header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/motd" element={<Motd />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
