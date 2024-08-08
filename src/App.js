import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowData from "./component/ShowData";
import Screening from "./pages/Screening.tsx";
import InfoForm from "./pages/InfoForm.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<ShowData />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/info/:id/:page" element={<InfoForm />} />
      </Routes>
    </>
  );
}

export default App;
