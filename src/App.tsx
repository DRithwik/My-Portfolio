import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import CodingPlatforms from './components/CodingPlatforms';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import MouseTracker from './components/MouseTracker';
import FrontendDevelopment from './pages/SkillPages/FrontendDevelopment';
import BackendDevelopment from './pages/SkillPages/BackendDevelopment';
import CSFundamentals from './pages/SkillPages/CSFundamentals';
import OtherSkills from './pages/SkillPages/OtherSkills';
  
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <MouseTracker />
            <Navigation />
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <TechnicalSkills />
            <CodingPlatforms />
            <Contact />
            <ScrollToTop />
            
            <footer className="py-8 px-4 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Rithwik. All rights reserved.</p>
            </footer>
          </div>
        } />
        <Route path="/skills/frontend" element={<FrontendDevelopment />} />
        <Route path="/skills/backend" element={<BackendDevelopment />} />
        <Route path="/skills/cs-fundamentals" element={<CSFundamentals />} />
        <Route path="/skills/other" element={<OtherSkills />} />
      </Routes>
    </Router>
  );
}
