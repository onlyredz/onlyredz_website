import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-gray-100 font-sans bg-dark-800">
      <div className="pt-6 px-3 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          {t('hero.greeting')} <span className="gradient-text">REDZ</span>
        </h1>
        <h2 className="text-base md:text-xl font-semibold text-gray-300">
          {t('hero.tagline')}
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mb-3 max-w-lg leading-relaxed">
          {t('hero.description')}
        </p>
        <div className="text-white">
          <p>Portfolio is working! 🎉</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
