import React from 'react';
import { Mail, Code, Briefcase, User, Star, Terminal, GitFork, Eye, Heart, Coffee, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import DiscordProfile from './components/DiscordProfile';
import { useGitHub } from './hooks/useGitHub';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const DISCORD_ID = '896514062714822696';
  const GITHUB_USERNAME = 'onlyredz';
  const { repos, loading: reposLoading, error: reposError } = useGitHub(GITHUB_USERNAME);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-gray-100 font-sans">
      <Navbar />
      
      {/* Hero Section - Ultra Compact */}
      <section className="pt-6 px-3 max-w-5xl mx-auto animated-bg min-h-[25vh] flex items-center">
        <div className="flex flex-col md:flex-row items-start justify-between gap-1 relative w-full">
          <div className="md:w-3/4 relative">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                {t('hero.greeting')} <span className="gradient-text">REDZ</span>
              </h1>
              {/* Discord Profile Picture */}
              <DiscordProfile discordId={DISCORD_ID} />
            </div>
            <h2 className="text-base md:text-xl font-semibold text-gray-300">
              {t('hero.tagline')}
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mb-3 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex gap-2 mb-4">
              <a href="#about" className="px-3 py-1.5 bg-accent-600 hover:bg-accent-500 text-white rounded-md transition-colors glow-effect text-xs font-medium">
                {t('hero.aboutButton')}
              </a>
              <a href="#projects" className="px-3 py-1.5 bg-dark-600/50 backdrop-blur-sm hover:bg-dark-500 text-white rounded-md transition-colors border border-dark-500 text-xs font-medium">
                {t('hero.viewWorkButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - GitHub Themed */}
      <Section id="about" title={t('about.title')} icon={<User size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">README.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">5 min read</span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            <div className="prose prose-sm prose-invert max-w-none">
              <div className="mb-3 pb-3 border-b border-dark-600">
                <h3 className="text-sm font-semibold mb-1.5 text-white flex items-center">
                  <span className="text-accent-400 mr-1.5">#</span> {t('about.introduction')}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {t('about.introductionText')}
                </p>
              </div>
              
              <div className="mb-3 pb-3 border-b border-dark-600">
                <h3 className="text-sm font-semibold mb-1.5 text-white flex items-center">
                  <span className="text-accent-400 mr-1.5">#</span> {t('about.expertise')}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  {t('about.expertiseText')}
                </p>
                <div className="bg-dark-700/70 p-2 rounded-md border border-dark-600">
                  <h4 className="text-xs font-semibold mb-1.5 text-white flex items-center">
                    <Terminal size={12} className="text-accent-400 mr-1.5" /> {t('about.technicalSkills')}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    <SkillBadge name="React" />
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="C#" />
                    <SkillBadge name="C++" />
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Lua" />
                    <SkillBadge name="Electron" />
                    <SkillBadge name="MySQL" />
                    <SkillBadge name="MongoDB" />
                    <SkillBadge name="PostgreSQL" />
                    <SkillBadge name="SQLite" />
                    <SkillBadge name="Git" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-1.5 text-white flex items-center">
                  <span className="text-accent-400 mr-1.5">#</span> {t('about.personal')}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {t('about.personalText')}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Star size={10} className="text-accent-400" />
                    <span>42 {t('about.starsText')}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <span>15 {t('about.forksText')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Discord Status Section */}
      <Section id="discord" title={t('discord.title')} icon={<User size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">discord-status.json</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">Live Status</span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            <div className="flex flex-col items-center justify-center space-y-3">
              <DiscordProfile discordId={DISCORD_ID} className="w-full max-w-xs" />
              <div className="text-center">
                <p className="text-xs text-gray-400">
                  {t('discord.connectText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section - GitHub Themed */}
      <Section id="projects" title={t('projects.title')} icon={<Code size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">repositories.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">
                <span className="font-mono">{reposLoading ? '...' : repos.length}</span> {t('projects.repositories')}
              </span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            {reposLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-dark-600 p-2.5">
                    <div className="animate-pulse">
                      <div className="h-4 bg-dark-600 rounded mb-2"></div>
                      <div className="h-3 bg-dark-600 rounded mb-2"></div>
                      <div className="h-3 bg-dark-600 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : reposError ? (
              <div className="text-center py-4">
                <p className="text-gray-400 text-sm">{t('projects.errorLoading')}</p>
                <p className="text-gray-500 text-xs mt-1">{reposError}</p>
              </div>
            ) : repos.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-gray-400 text-sm">{t('projects.noRepositories')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {repos.map((repo) => (
                  <div key={repo.id} className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-dark-600 hover:border-accent-500/30 transition-all duration-300">
                    <div className="p-2.5">
                      <div className="flex items-start justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <Code size={14} className="text-accent-400" />
                          <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-white hover:text-accent-400 transition-colors"
                          >
                            {repo.name}
                          </a>
                        </div>
                        <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-full">Public</span>
                      </div>
                      
                      <p className="text-gray-300 mb-2 text-[11px] leading-relaxed">
                        {repo.description || t('projects.noDescription')}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {repo.language && (
                          <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">
                            {repo.language}
                          </span>
                        )}
                        {repo.topics?.slice(0, 3).map((topic) => (
                          <span key={topic} className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1.5 border-t border-dark-600">
                        <div className="flex items-center gap-3">
                          {repo.language && (
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <span>{repo.language}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Star size={10} className="text-gray-400" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork size={10} className="text-gray-400" />
                            <span>{repo.forks_count}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {repo.homepage && (
                            <a 
                              href={repo.homepage} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5"
                            >
                              <Eye size={10} />
                              <span>{t('projects.demo')}</span>
                            </a>
                          )}
                          <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5"
                          >
                            <span>{t('projects.code')}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Experience Section - Adapted for Student/Early Career */}
      <Section id="experience" title={t('experience.title')} icon={<Briefcase size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">experience.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">Student & Personal Projects</span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            <div className="space-y-2">
              <div className="border-l-2 border-accent-500 pl-2 relative">
                <div className="absolute w-2 h-2 bg-accent-500 rounded-full -left-[5px] top-1 glow-effect"></div>
                <h3 className="text-sm font-semibold text-white">{t('experience.studentTitle')}</h3>
                <p className="text-accent-400 text-[10px] font-medium tracking-wide">{t('experience.studentPeriod')}</p>
                <p className="text-gray-300 mt-1 bg-dark-700/30 p-2 rounded-lg backdrop-blur-sm text-xs leading-relaxed">
                  {t('experience.studentDescription')}
                </p>
              </div>
              
              <div className="border-l-2 border-accent-500 pl-2 relative">
                <div className="absolute w-2 h-2 bg-accent-500 rounded-full -left-[5px] top-1 glow-effect"></div>
                <h3 className="text-sm font-semibold text-white">{t('experience.developerTitle')}</h3>
                <p className="text-accent-400 text-[10px] font-medium tracking-wide">{t('experience.developerPeriod')}</p>
                <p className="text-gray-300 mt-1 bg-dark-700/30 p-2 rounded-lg backdrop-blur-sm text-xs leading-relaxed">
                  {t('experience.developerDescription')}
                </p>
              </div>
              
              <div className="border-l-2 border-accent-500 pl-2 relative">
                <div className="absolute w-2 h-2 bg-accent-500 rounded-full -left-[5px] top-1 glow-effect"></div>
                <h3 className="text-sm font-semibold text-white">{t('experience.contributorTitle')}</h3>
                <p className="text-accent-400 text-[10px] font-medium tracking-wide">{t('experience.contributorPeriod')}</p>
                <p className="text-gray-300 mt-1 bg-dark-700/30 p-2 rounded-lg backdrop-blur-sm text-xs leading-relaxed">
                  {t('experience.contributorDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Terminal-inspired Footer */}
      <footer className="mt-4 border-t border-accent-500/20">
        {/* Matrix-like animation effect - Reduced height */}
        <div className="w-full h-4 overflow-hidden relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(80)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-0.5 bg-gradient-to-b from-transparent via-accent-500/30 to-transparent"
                  style={{ 
                    height: `${Math.floor(Math.random() * 30) + 10}px`,
                    marginTop: `${Math.floor(Math.random() * 20)}px`,
                    opacity: Math.random() * 0.7 + 0.3,
                    animation: `pulse-slow ${Math.floor(Math.random() * 3) + 2}s infinite ${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-3 py-4 relative">
          {/* Terminal Window with enhanced styling */}
          <div className="rounded-lg overflow-hidden border border-accent-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] relative z-10">
            {/* Terminal Header with glowing effect */}
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 px-3 py-2 border-b border-accent-500/20 flex items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-medium text-gray-300 font-mono tracking-wide">redz@portfolio ~</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 bg-dark-800/80 px-1.5 py-0.5 rounded-md border border-dark-600">bash</span>
              </div>
            </div>
            
            {/* Terminal Content with enhanced styling */}
            <div className="bg-gradient-to-b from-dark-900 to-dark-800 p-4 font-mono relative">
              {/* Background matrix effect */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(100)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute text-[8px] text-accent-400 font-mono"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2,
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </div>
                ))}
              </div>

              <div className="space-y-2 relative z-10">
                {/* AlexDev Logo with enhanced styling */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-accent-500/20">
                  <div className="p-1.5 bg-dark-700/80 rounded-md border border-accent-500/30 shadow-[0_0_8px_rgba(99,102,241,0.2)]">
                    <Code size={16} className="text-accent-400" />
                  </div>
                  <h3 className="text-base font-bold text-white flex items-center">
                    REDZ<span className="gradient-text"></span>
                    <span className="ml-2 text-[10px] text-accent-400 bg-dark-700/80 px-1.5 py-0.5 rounded-full border border-accent-500/30">v2.5.0</span>
                  </h3>
                </div>
                
                <div className="flex items-center">
                  <span className="text-accent-400 mr-1">$</span>
                  <span className="text-gray-300 text-xs">cat contact.json</span>
                </div>
                <div className="text-gray-300 text-xs bg-dark-800/30 p-3 rounded-md border border-dark-700 font-mono relative overflow-hidden">
                  <div className="relative z-10">
                    {`{
  "name": "${t('contact.name')}",
  "email": "${t('contact.email')}",
  "location": "${t('contact.location')}",
  "availability": "${t('contact.availability')}",
  "discord": {
    "id": "${DISCORD_ID}",
    "username": "${t('contact.discordUsername')}",
    "status": "${t('contact.discordStatus')}"
  },
  "interests": ${JSON.stringify(t('contact.interests'))},
  "languages": ${JSON.stringify(t('contact.languages'))}
}`}
                  </div>
                  {/* Subtle scan line effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent opacity-30"
                    style={{ 
                      animation: 'scanline 2s linear infinite',
                      backgroundSize: '100% 8px'
                    }}
                  ></div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-accent-400 mr-1">$</span>
                  <span className="text-gray-300 text-xs">./connect.sh</span>
                </div>
                <div className="text-gray-300 text-xs space-y-2 bg-dark-800/30 p-3 rounded-md border border-dark-700 relative">
                  <p className="text-accent-300">{t('footer.initializing')}</p>
                  <div className="w-full h-1 bg-dark-700 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-accent-600 to-accent-400 w-full animate-pulse"></div>
                  </div>
                  <p>{t('footer.connectionEstablished')}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    <a 
                      href="mailto:onlyredzdev@gmail.com" 
                      className="flex items-center gap-2 p-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-md border border-dark-600 hover:border-accent-500/30 transition-all group"
                    >
                      <div className="p-1 bg-dark-600 rounded-md border border-dark-500 group-hover:border-accent-500/30 transition-all">
                        <Mail size={12} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">{t('footer.email')}</p>
                        <p className="text-xs text-gray-300 group-hover:text-accent-400 transition-colors">onlyredzdev@gmail.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com/onlyredz" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 p-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-md border border-dark-600 hover:border-accent-500/30 transition-all group"
                    >
                      <div className="p-1 bg-dark-600 rounded-md border border-dark-500 group-hover:border-accent-500/30 transition-all">
                        <Github size={12} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">{t('footer.github')}</p>
                        <p className="text-xs text-gray-300 group-hover:text-accent-400 transition-colors">github.com/onlyredz</p>
                      </div>
                    </a>
                    
                    <a 
                      href={`https://discord.com/users/${DISCORD_ID}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 p-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-md border border-dark-600 hover:border-accent-500/30 transition-all group"
                    >
                      <div className="p-1 bg-dark-600 rounded-md border border-dark-500 group-hover:border-accent-500/30 transition-all">
                        <User size={12} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">{t('footer.discord')}</p>
                        <p className="text-xs text-gray-300 group-hover:text-accent-400 transition-colors">{t('footer.liveStatus')}</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3 pt-2 border-t border-dark-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-accent-400 font-semibold">{t('footer.availableForHire')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom Credits */}
          <div className="mt-3 text-center relative z-10">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-dark-800/50 rounded-full border border-accent-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
              <span className="text-[10px] text-gray-400">
                © {new Date().getFullYear()} REDZ. {t('footer.allRightsReserved')}
              </span>
            </div>
          </div>
        </div>
      </footer>
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
