import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Clock } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const navLinks = [
    { href: '#', label: 'Home', icon: Home },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#coding-platforms', label: 'Coding Platforms' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Rithwik.dev
          </a>
          <div className="hidden md:flex items-center gap-2 text-gray-400">
            <Clock size={16} className="text-blue-400" />
            <span className="text-sm">{formatTime(currentTime)}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2"
              onClick={(e) => {
                if (href === '#') {
                  e.preventDefault();
                  scrollToTop();
                }
                setIsMenuOpen(false);
              }}
            >
              {Icon && <Icon size={16} />}
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`md:hidden absolute w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen border-b border-gray-800' : 'max-h-0'
      } overflow-hidden`}>
        <div className="px-4 py-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 py-3 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => {
                if (href === '#') {
                  e.preventDefault();
                  scrollToTop();
                }
                setIsMenuOpen(false);
              }}
            >
              {Icon && <Icon size={16} />}
              {label}
            </a>
          ))}
          <div className="flex items-center gap-2 py-3 text-gray-400">
            <Clock size={16} className="text-blue-400" />
            <span className="text-sm">{formatTime(currentTime)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}