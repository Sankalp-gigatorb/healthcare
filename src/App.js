import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Screening from "./pages/Screening.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screening" element={<Screening/>} />
      </Routes>
    </>
  );
}

export default App;
