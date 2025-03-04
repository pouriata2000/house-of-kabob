import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Reservations from "./pages/Reservations.jsx";
import Contact from "./pages/Contact.jsx";
import Story from "./pages/Story.jsx";
import "./App.css";  // or "./App.css"


function App() {
  return (
    <Router>
      <Navbar /> {/* This Navbar will appear on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;
