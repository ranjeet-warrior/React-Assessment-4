import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
