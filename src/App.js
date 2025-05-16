import './index.css';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  return (
    <div className = "font-sans text-gray-800">
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
