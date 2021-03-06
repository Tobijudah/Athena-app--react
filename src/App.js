import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Availability from './components/Availability/Availability';
import FormSection from './components/FormSection/FormSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="container">
        <Navbar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Availability/>
      </div>
      <FormSection/>
      <Footer/>
    </div>
  );
}

export default App;
