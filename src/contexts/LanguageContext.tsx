import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt-br';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.greeting': "Hi, I'm",
    'hero.tagline': "Crafting digital experiences",
    'hero.description': "I build exceptional digital experiences with modern technologies. Focused on creating clean, user-friendly applications that solve real problems.",
    'hero.aboutButton': "About Me",
    'hero.viewWorkButton': "View Work",

    // About Section
    'about.title': "About Me",
    'about.introduction': "Introduction",
    'about.introductionText': "I'm a software engineer and IT and operating systems student from Brazil. Most of my time is spent programming. Sometimes I build web apps with React and TypeScript, other times I build desktop apps with C# or explore backend systems with Node.js, Lua, and C++. I like to mix things up and learn different ways to solve problems.",
    'about.expertise': "Expertise",
    'about.expertiseText': "I specialize in full-stack development with a focus on modern web technologies, desktop applications, and backend systems. I'm always exploring new technologies to stay at the cutting edge of software development.",
    'about.technicalSkills': "Technical Skills",
    'about.personal': "Personal",
    'about.personalText': "I'm passionate about learning new technologies and solving complex problems. I believe in continuous learning and contributing to open source projects whenever possible.",
    'about.starsText': "stars on this repo",
    'about.forksText': "forks",

    // Discord Section
    'discord.title': "Discord Status",
    'discord.connectText': "Connect with me on Discord for collaboration and discussions!",

    // Projects Section
    'projects.title': "Projects",
    'projects.repositories': "repositories",
    'projects.errorLoading': "Error loading projects",
    'projects.noRepositories': "No public repositories found",
    'projects.noDescription': "No description available",
    'projects.demo': "Demo",
    'projects.code': "Code",

    // Experience Section
    'experience.title': "Experience",
    'experience.studentTitle': "Software Engineering Student",
    'experience.studentPeriod': "UNIVERSITY • 2025 - PRESENT",
    'experience.studentDescription': "Currently pursuing a degree in Software Engineering and IT. Learning modern development practices, algorithms, data structures, and software architecture principles.",
    'experience.developerTitle': "Personal Project Developer",
    'experience.developerPeriod': "FREELANCE • PRESENT",
    'experience.developerDescription': "Building various personal projects to expand my skills. Working with React, TypeScript, C#, C++, and exploring different technologies to solve real-world problems.",
    'experience.contributorTitle': "Open Source Contributor",
    'experience.contributorPeriod': "GITHUB • PRESENT",
    'experience.contributorDescription': "Contributing to open source projects and maintaining my own repositories. Learning from the community and sharing knowledge through code.",

    // Footer
    'footer.initializing': "Initializing connection protocol...",
    'footer.connectionEstablished': "Connection established! Available communication channels:",
    'footer.email': "Email",
    'footer.github': "GitHub",
    'footer.discord': "Discord",
    'footer.liveStatus': "Live Status",
    'footer.availableForHire': "Status: Available For Hire",
    'footer.allRightsReserved': "All rights reserved.",

    // Contact JSON
    'contact.name': "REDZ",
    'contact.email': "onlyredzdev@gmail.com",
    'contact.location': "Brazil",
    'contact.availability': "Open to work",
    'contact.discordUsername': "Live from Discord API",
    'contact.discordStatus': "Real-time status",
    'contact.interests': ["Web Development", "Desktop Apps", "Backend Systems", "Open Source"],
    'contact.languages': ["JavaScript", "TypeScript", "C#", "C++", "Lua"],

    // Navigation
    'nav.about': "About",
    'nav.projects': "Projects",
    'nav.experience': "Experience",
    'nav.discord': "Discord",
  },
  'pt-br': {
    // Hero Section
    'hero.greeting': "Olá, eu sou",
    'hero.tagline': "Criando experiências digitais",
    'hero.description': "Construo experiências digitais excepcionais com tecnologias modernas. Focado em criar aplicações limpas, amigáveis e que resolvem problemas reais.",
    'hero.aboutButton': "Sobre Mim",
    'hero.viewWorkButton': "Ver Trabalhos",

    // About Section
    'about.title': "Sobre Mim",
    'about.introduction': "Introdução",
    'about.introductionText': "Sou um estudante de engenharia de software e TI e sistemas operacionais do Brasil. A maior parte do meu tempo é dedicada à programação. Às vezes construo aplicações web com React e TypeScript, outras vezes aplicações desktop com C# ou exploro sistemas backend com Node.js, Lua e C++. Gosto de misturar as coisas e aprender diferentes maneiras de resolver problemas.",
    'about.expertise': "Especialização",
    'about.expertiseText': "Especializo-me em desenvolvimento full-stack com foco em tecnologias web modernas, aplicações desktop e sistemas backend. Sempre estou explorando novas tecnologias para me manter na vanguarda do desenvolvimento de software.",
    'about.technicalSkills': "Habilidades Técnicas",
    'about.personal': "Pessoal",
    'about.personalText': "Sou apaixonado por aprender novas tecnologias e resolver problemas complexos. Acredito no aprendizado contínuo e em contribuir para projetos open source sempre que possível.",
    'about.starsText': "estrelas neste repositório",
    'about.forksText': "forks",

    // Discord Section
    'discord.title': "Status do Discord",
    'discord.connectText': "Conecte-se comigo no Discord para colaboração e discussões!",

    // Projects Section
    'projects.title': "Projetos",
    'projects.repositories': "repositórios",
    'projects.errorLoading': "Erro ao carregar projetos",
    'projects.noRepositories': "Nenhum repositório público encontrado",
    'projects.noDescription': "Nenhuma descrição disponível",
    'projects.demo': "Demo",
    'projects.code': "Código",

    // Experience Section
    'experience.title': "Experiência",
    'experience.studentTitle': "Estudante de Engenharia de Software",
    'experience.studentPeriod': "UNIVERSIDADE • 2025 - PRESENTE",
    'experience.studentDescription': "Atualmente cursando graduação em Engenharia de Software e TI. Aprendendo práticas modernas de desenvolvimento, algoritmos, estruturas de dados e princípios de arquitetura de software.",
    'experience.developerTitle': "Desenvolvedor de Projetos Pessoais",
    'experience.developerPeriod': "FREELANCER • PRESENTE",
    'experience.developerDescription': "Construindo vários projetos pessoais para expandir minhas habilidades. Trabalhando com React, TypeScript, C#, C++ e explorando diferentes tecnologias para resolver problemas do mundo real.",
    'experience.contributorTitle': "Contribuidor Open Source",
    'experience.contributorPeriod': "GITHUB • PRESENTE",
    'experience.contributorDescription': "Contribuindo para projetos open source e mantendo meus próprios repositórios. Aprendendo com a comunidade e compartilhando conhecimento através do código.",

    // Footer
    'footer.initializing': "Inicializando protocolo de conexão...",
    'footer.connectionEstablished': "Conexão estabelecida! Canais de comunicação disponíveis:",
    'footer.email': "Email",
    'footer.github': "GitHub",
    'footer.discord': "Discord",
    'footer.liveStatus': "Status ao Vivo",
    'footer.availableForHire': "Status: Disponível para Contratação",
    'footer.allRightsReserved': "Todos os direitos reservados.",

    // Contact JSON
    'contact.name': "REDZ",
    'contact.email': "onlyredzdev@gmail.com",
    'contact.location': "Brasil",
    'contact.availability': "Disponível para trabalho",
    'contact.discordUsername': "Ao vivo da API do Discord",
    'contact.discordStatus': "Status em tempo real",
    'contact.interests': ["Desenvolvimento Web", "Aplicações Desktop", "Sistemas Backend", "Open Source"],
    'contact.languages': ["JavaScript", "TypeScript", "C#", "C++", "Lua"],

    // Navigation
    'nav.about': "Sobre",
    'nav.projects': "Projetos",
    'nav.experience': "Experiência",
    'nav.discord': "Discord",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string | string[] => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
