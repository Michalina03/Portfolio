import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Project from "./components/Project";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./scss/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projekty" element={<Project />} />
    <Route path="/o mnie" element={<About />} />
    <Route path="/kontakt" element={<Contact />} />
  </Routes>
  <Footer />
</HashRouter>
  </React.StrictMode>
);