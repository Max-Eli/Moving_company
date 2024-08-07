import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Services from './screens/Services';
import AboutUs from './screens/AboutUs';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
