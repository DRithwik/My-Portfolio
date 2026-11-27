import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import { profile } from './data/profile';

// Scrolls to #section after navigating back to the home page.
function HashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);
  return null;
}
               
           
   
export default function App() {
  return (
    <Router>
      <HashScroll />
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
              <p>© {new Date().getFullYear()} {profile.shortName}. All rights reserved.</p>
            </footer>
          </div>
        } />
        <Route path="/skills/:slug" element={<SkillPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
