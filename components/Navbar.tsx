
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Soluções', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className={`w-full h-full ${isScrolled ? 'fill-black' : 'fill-white'}`}>
                {/* Simplified Logo Icon inspired by the original */}
                <rect x="20" y="50" width="15" height="30" rx="2" />
                <rect x="42" y="65" width="15" height="15" rx="2" />
                <rect x="65" y="30" width="15" height="50" rx="2" />
                <path d="M20 60 L45 40 L60 60 L85 20" fill="none" stroke={isScrolled ? 'black' : 'white'} strokeWidth="4" />
                <path d="M75 20 L85 20 L85 30" fill="none" stroke={isScrolled ? 'black' : 'white'} strokeWidth="4" />
              </svg>
            </div>
            <span className={`text-xl font-bold tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
              CRUZ <span className="font-light">CONSÓRCIO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gray-400 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isScrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Consultoria Grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center px-3 py-3 mt-4 bg-black text-white rounded-md font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consultoria Grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
