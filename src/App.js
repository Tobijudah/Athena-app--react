import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Availability from './components/Availability/Availability';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Availability/>
    </div>
  );
}

export default App;
