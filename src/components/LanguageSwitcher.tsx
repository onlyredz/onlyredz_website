import React, { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import euaFlag from './imgs/eua.png';
import ptBrFlag from './imgs/pt-br.png';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: 'en' as Language,
      name: 'English',
      flag: euaFlag
    },
    {
      code: 'pt-br' as Language,
      name: 'Português',
      flag: ptBrFlag
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
             <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center gap-1.5 px-2 py-1.5 bg-dark-700/50 hover:bg-dark-600/50 backdrop-blur-sm rounded-md border border-dark-600 hover:border-accent-500/30 transition-all duration-300 group"
       >
         <Languages size={14} className="text-accent-400 group-hover:text-accent-300 transition-colors" />
         <div className="flex items-center gap-1.5">
           <img 
             src={currentLanguage?.flag} 
             alt={currentLanguage?.name}
             className="w-4 h-3 object-cover rounded-sm"
           />
           <span className="text-xs font-medium text-white hidden sm:block">
             {currentLanguage?.name}
           </span>
         </div>
         <ChevronDown 
           size={12} 
           className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
         />
       </button>

             {/* Dropdown */}
       {isOpen && (
         <div className="absolute top-full right-0 mt-2 w-40 bg-dark-800/95 backdrop-blur-md rounded-lg border border-dark-600 shadow-xl z-50 overflow-hidden">
           <div className="py-1">
             {languages.map((lang) => (
               <button
                 key={lang.code}
                 onClick={() => handleLanguageChange(lang.code)}
                 className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-dark-700/50 transition-colors duration-200 ${
                   language === lang.code 
                     ? 'bg-accent-500/20 text-accent-400 border-r-2 border-accent-500' 
                     : 'text-gray-300 hover:text-white'
                 }`}
               >
                 <img 
                   src={lang.flag} 
                   alt={lang.name}
                   className="w-5 h-4 object-cover rounded-sm"
                 />
                 <span className="text-xs font-medium">{lang.name}</span>
                 {language === lang.code && (
                   <div className="ml-auto w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse"></div>
                 )}
               </button>
             ))}
           </div>
         </div>
       )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
