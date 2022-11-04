import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Rating from "./components/Rating/Rating";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import React, { useState } from "react";
import Menu from "./components/Navbar/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      {isOpen === true ? (
        <Menu handleToggle={handleToggle}/>
      ) : (
        <>
          <Navbar isOpen={isOpen} handleToggle={handleToggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
