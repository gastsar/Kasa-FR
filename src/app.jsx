import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./utils/sass/index.scss";
import Home from './pages/Home/';
import About from './pages/About';
import Logement from './pages/Logement';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';

export default function App() {

  return (
    <div className='app-container'>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
