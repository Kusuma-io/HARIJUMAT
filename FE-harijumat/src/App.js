import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Class from "./Components/Class/Class";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Regist from "./Components/Regist/Regist";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/class" element={<Class />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
