import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Contact } from "./Contact/Contact";
import Blogs from "./Blogs/Blogs";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
