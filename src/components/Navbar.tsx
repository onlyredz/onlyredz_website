import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
         <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/90 backdrop-blur-md py-1 shadow-md' : 'bg-transparent py-1.5'}`}>
       <div className="max-w-5xl mx-auto px-3">
         <div className="flex justify-between items-center gap-4">
          <div className="font-bold text-white flex items-center">
            <span className="px-2 py-0.5 bg-dark-700/50 text-accent-400 rounded-full text-[10px] sm:text-xs border border-accent-500/30 tracking-wide font-medium">
              FULL STACK DEVELOPER
            </span>
          </div>

                     {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-3">
             <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors relative group text-xs font-medium">
               Home
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
             </a>
             <a href="#about" className="text-gray-300 hover:text-accent-400 transition-colors relative group text-xs font-medium">
               {t('nav.about')}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
             </a>
             <a href="#projects" className="text-gray-300 hover:text-accent-400 transition-colors relative group text-xs font-medium">
               {t('nav.projects')}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
             </a>
             <a href="#experience" className="text-gray-300 hover:text-accent-400 transition-colors relative group text-xs font-medium">
               {t('nav.experience')}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
             </a>
           </div>

           {/* Language Switcher - Desktop */}
           <div className="hidden md:block">
             <LanguageSwitcher />
           </div>

                     {/* Mobile Menu Button and Language Switcher */}
           <div className="md:hidden flex items-center gap-1.5">
             <LanguageSwitcher />
             <button 
               className="text-gray-300 focus:outline-none"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
             </button>
           </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-dark-600 mt-1 animate-fadeIn">
          <div className="flex flex-col space-y-1 px-3 py-2">
            <a 
              href="#" 
              className="text-gray-300 hover:text-accent-400 transition-colors p-1.5 hover:bg-dark-700/50 rounded-md text-xs font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-accent-400 transition-colors p-1.5 hover:bg-dark-700/50 rounded-md text-xs font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-accent-400 transition-colors p-1.5 hover:bg-dark-700/50 rounded-md text-xs font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-accent-400 transition-colors p-1.5 hover:bg-dark-700/50 rounded-md text-xs font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.experience')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;