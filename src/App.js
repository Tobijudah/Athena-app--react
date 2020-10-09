import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
