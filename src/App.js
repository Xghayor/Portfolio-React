import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from './components/Banner';
import Footer from "./components/Footer";
import About from './components/About';
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from './components/Contact';

const Layout = () => (
  <div>
    <Banner />
    <Skill />
    <Work />
  </div>
);

const App = () => (
  <Router>
  <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
      <Route path="about" element={<About />}>
      </Route>
      <Route path="contact" element={<Contact />}>
      </Route>
    </Routes>
    <Footer />
  </Router>
);



export default App;
