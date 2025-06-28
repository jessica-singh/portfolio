import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Background from './components/Background';
import './index.css';

export default function App() {
  return (
    <Router>
      <Background /> {/* Moved outside the div to render at body level */}
      <div className="relative min-h-screen text-white font-mono overflow-x-hidden">
        <Navbar />
        <main className="pt-16 px-4">
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
      </div>
    </Router>
  );
}