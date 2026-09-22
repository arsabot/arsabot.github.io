/**
 * Internationalization (i18n) Engine - ES & EN
 */

export const translations = {
  es: {
    // Navigation
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.stats': 'GitHub Stats',
    'nav.contact': 'Contacto',
    'nav.talk': 'Hablemos',
    'nav.cv': 'CV',
    'nav.cvEs': 'Español (PDF)',
    'nav.cvEn': 'English (PDF)',
    'nav.cvEsSub': 'Versión completa',
    'nav.cvEnSub': 'Full version',
    'nav.github': 'GitHub',
    'nav.githubProfile': 'Perfil de GitHub',
    'nav.whatsapp': 'Contactar por WhatsApp',
    'nav.themeToggle': 'Cambiar tema',

    // Hero
    'hero.status': 'Disponible para proyectos & roles',
    'hero.greeting': 'Hola, soy Rodrigo.',
    'hero.role': 'Full Stack Web Developer',
    'hero.focusLabel': 'Stack & Focus:',
    'hero.subtitle': 'Desarrollador Web Full Stack apasionado por diseñar aplicaciones web de alta fidelidad, plataformas SaaS e iniciativas cívicas (<em>Invitely</em>, <em>Merlo Participa</em>, <em>PARKIA</em>), herramientas de IA y arquitecturas de backend escalables con Next.js, React, TypeScript, Python y Supabase.',
    'hero.btnProjects': 'Explorar Proyectos',
    'hero.btnCV': 'Descargar CV',
    'hero.btnWhatsapp': 'WhatsApp Directo',
    'hero.btnEmail': 'Email',
    'hero.connect': 'CONECTAR:',
    'hero.cvEsTitle': 'Descargar en Español',
    'hero.cvEnTitle': 'Download in English',
    'hero.cvSub': 'PDF • Rodrigo Saavedra',

    // Typewriter
    'typewriter.1': 'Next.js 15 & React 19 Specialist',
    'typewriter.2': 'TypeScript & Strict Architecture',
    'typewriter.3': 'Python, Django 5 & FastAPI',
    'typewriter.4': 'Supabase & PostgreSQL Architect',
    'typewriter.5': 'AI Integration & OCR Tooling',
    'typewriter.6': 'Invitely, Merlo Participa & PARKIA SaaS',

    // About
    'about.tag': 'Trayectoria',
    'about.title': 'Desarrollo sólido con visión de producto',
    'about.desc': 'Combino rigor técnico, buenas prácticas y sensibilidad estética para transformar ideas complejas en productos digitales de alto rendimiento.',
    'about.card1Title': 'Desarrollador Full Stack & Creador de Soluciones',
    'about.card1P1': 'Me especializo en el ciclo de vida completo del desarrollo de software: desde el modelado de bases de datos relacionales y diseño de APIs robustas hasta la construcción de interfaces de usuario modernas, interactivas y con animaciones fluidas.',
    'about.card1P2': 'He diseñado e implementado plataformas como <strong>Invitely</strong> (SaaS de invitaciones digitales), <strong>Merlo Participa</strong> (portal vecinal y gestión cívica con geolocalización), <strong>PARKIA</strong> (movilidad urbana y reservas con geolocalización), herramientas de <strong>Inteligencia Artificial & OCR</strong> y <strong>Forge Champions</strong>.',
    'about.metric1Label': 'Apps Insignia',
    'about.metric2Label': 'Tecnologías',
    'about.metric3Label': 'Type-Safe & Clean Code',
    'about.card2Title': 'Pilares de Trabajo',
    'about.pillar1': '<strong>TypeScript Estricto</strong> en todo el stack.',
    'about.pillar2': '<strong>Integración de IA & LLMs</strong> en producción.',
    'about.pillar3': '<strong>Diseño UI/UX</strong> moderno y fluido.',
    'about.pillar4': '<strong>Seguridad & RLS</strong> en base de datos.',

    // Skills
    'skills.tag': 'Competencias',
    'skills.title': 'Ecosistema & Stack Tecnológico',
    'skills.desc': 'Herramientas y tecnologías modernas que domino para construir aplicaciones robustas de punta a punta.',
    'skills.tabAll': 'Todos',
    'skills.tabFront': 'Frontend',
    'skills.tabBack': 'Backend & APIs',
    'skills.tabDb': 'Bases de Datos & Cloud',
    'skills.tabTools': 'Herramientas & DevOps',

    // Projects
    'projects.tag': 'Portafolio',
    'projects.title': 'Proyectos Destacados',
    'projects.desc': 'Selección de aplicaciones reales desarrolladas con foco en arquitectura, experiencia de usuario y resolución de problemas.',
    'projects.tabAll': 'Todos los proyectos',
    'projects.tabFull': 'Fullstack & SaaS',
    'projects.tabFront': 'Frontend / UI',
    'projects.tabBack': 'Backend / APIs',
    'projects.detailsBtn': 'Detalles de Arquitectura',
    'projects.viewCode': 'Ver código en GitHub',
    'projects.viewLive': 'Ver demo en vivo',
    'projects.modalTitle': 'Detalles de Arquitectura',
    'projects.modalStack': 'Stack Tecnológico',
    'projects.modalHighlights': 'Aspectos Técnicos Destacados',
    'projects.modalDiagram': 'Diagrama de Arquitectura',
    'projects.modalRepo': 'Ver Repositorio en GitHub',
    'projects.modalConsult': 'Consultar por WhatsApp',

    // Experience / Timeline
    'experience.tag': 'Hitos & Experiencia',
    'experience.title': 'Línea de Tiempo Profesional',
    'experience.desc': 'Evolución continua, proyectos entregados y desarrollo de capacidades avanzadas de software.',
    'exp.invitelyDate': '2026 — Presente',
    'exp.invitelyRole': 'Lead Developer — Invitely SaaS',
    'exp.invitelyOrg': 'EventTech & Plataforma de Invitaciones Interactivas',
    'exp.invitelyDesc': 'Desarrollo integral con Next.js 15, TypeScript, Supabase, Tailwind CSS y RSVP en tiempo real con optimización de entrega móvil.',
    'exp.parkiaDate': '2026',
    'exp.parkiaRole': 'Lead Fullstack Developer — PARKIA',
    'exp.parkiaOrg': 'Plataforma de Movilidad Urbana & Reservas Inteligentes',
    'exp.parkiaDesc': 'Diseño integral de arquitectura frontend/backend con React 19, TypeScript, mapas interactivos con Leaflet, backend en Python Django 5 con DRF y autenticación JWT.',
    'exp.forgeDate': '2026',
    'exp.forgeRole': 'Desarrollador Fullstack — Forge Champions',
    'exp.forgeOrg': 'Fundación Forge • Team 7',
    'exp.forgeDesc': 'Portal educativo de mentorías corporativas y masterclasses para conectar ejecutivos con jóvenes talentos.',
    'exp.msaDate': 'Ene 2025 — May 2026',
    'exp.msaRole': 'QA Tester — Grupo MSA',
    'exp.msaOrg': 'Sistemas Electorales & Software de Alta Demanda',
    'exp.msaDesc': 'Seguimiento de incidentes, análisis de Root Cause en código e infraestructura, diagnóstico técnico y colaboración estrecha con desarrollo.',
    'exp.upliveDate': '2021 — 2023',
    'exp.upliveRole': 'Analista de Soporte IT — Uplive',
    'exp.upliveOrg': 'Soporte Técnico Digital & Troubleshooting',
    'exp.upliveDesc': 'Soporte técnico avanzado, troubleshooting de sistemas, análisis de logs y resolución de incidencias críticas bajo SLA.',

    // GitHub Stats
    'github.tag': 'Open Source & GitHub',
    'github.title': 'Estadísticas & Ecosistema en GitHub',
    'github.desc': 'Métricas consolidadas de actividad, desglose de lenguajes y repositorios públicos del perfil de',
    'github.metric1': 'Contribuciones',
    'github.metric1Sub': 'Commits, PRs & Reviews anuales',
    'github.metric2': 'Repositorios',
    'github.metric2Sub': 'Proyectos SaaS, APIs & Frontends',
    'github.metric3': 'Racha Activa',
    'github.metric3Sub': 'Mejor racha: 4 días consecutivos',
    'github.metric4': 'Calidad & Tests',
    'github.metric4Sub': 'TypeScript estricto & Clean Code',
    'github.langsTitle': 'Lenguajes & Ecosistema Principal',
    'github.streakTitle': 'Actividad & Racha en Vivo',
    'github.activeBadge': 'Activo',
    'github.pinnedTitle': 'Repositorios Públicos Destacados',
    'github.ctaTitle': '¿Deseas inspeccionar el código fuente y mis contribuciones?',
    'github.ctaDesc': 'Explora todos mis repositorios, commits y pull requests en mi cuenta oficial de GitHub.',
    'github.btnProfile': 'Ver Perfil @arsabot',
    'github.btnRepos': 'Ver Todos los Repositorios',

    // Contact
    'contact.tag': 'Contacto',
    'contact.title': 'Hablemos de tu Próximo Proyecto',
    'contact.desc': '¿Tienes una propuesta de trabajo, una consulta técnica o deseas crear algo extraordinario? Conversemos directamente.',
    'contact.channelsTitle': 'Canales Directos',
    'contact.channelsDesc': 'Estoy disponible para posiciones full-time, proyectos SaaS, contratos remotos y consultoría técnica.',
    'contact.formTitle': 'Enviar un Mensaje',
    'contact.nameLabel': 'Tu Nombre *',
    'contact.namePlaceholder': 'Ej: Lucas Fernández',
    'contact.emailLabel': 'Tu Correo Electrónico *',
    'contact.emailPlaceholder': 'lucas@empresa.com',
    'contact.subjectLabel': 'Asunto',
    'contact.subjectPlaceholder': 'Propuesta de proyecto / Oportunidad laboral',
    'contact.messageLabel': 'Mensaje *',
    'contact.messagePlaceholder': 'Cuéntame sobre el proyecto, requerimientos o tecnologías...',
    'contact.sendBtn': 'Enviar Mensaje',
    'contact.responseTime': '🟢 Tiempo promedio de respuesta: &lt; 2 horas por WhatsApp.',
    'contact.copyToast': '¡Email copiado al portapapeles!',

    // Footer
    'footer.backTop': 'Volver arriba',
    'footer.brandSubtitle': 'PROFESSIONAL WEB DEVELOPMENT'
  },

  en: {
    // Navigation
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.stats': 'GitHub Stats',
    'nav.contact': 'Contact',
    'nav.talk': "Let's Talk",
    'nav.cv': 'CV',
    'nav.cvEs': 'Spanish (PDF)',
    'nav.cvEn': 'English (PDF)',
    'nav.cvEsSub': 'Full version',
    'nav.cvEnSub': 'Full version',
    'nav.github': 'GitHub',
    'nav.githubProfile': 'GitHub Profile',
    'nav.whatsapp': 'Chat on WhatsApp',
    'nav.themeToggle': 'Toggle theme',

    // Hero
    'hero.status': 'Available for projects & roles',
    'hero.greeting': "Hi, I'm Rodrigo.",
    'hero.role': 'Full Stack Web Developer',
    'hero.focusLabel': 'Stack & Focus:',
    'hero.subtitle': 'Full Stack Web Developer passionate about crafting high-fidelity web applications, interactive SaaS platforms and civic solutions (<em>Invitely</em>, <em>Merlo Participa</em>, <em>PARKIA</em>), AI tooling, and scalable backend architectures with Next.js, React, TypeScript, Python, and Supabase.',
    'hero.btnProjects': 'Explore Projects',
    'hero.btnCV': 'Download CV',
    'hero.btnWhatsapp': 'Direct WhatsApp',
    'hero.btnEmail': 'Email',
    'hero.connect': 'CONNECT:',
    'hero.cvEsTitle': 'Download in Spanish',
    'hero.cvEnTitle': 'Download in English',
    'hero.cvSub': 'PDF • Rodrigo Saavedra',

    // Typewriter
    'typewriter.1': 'Next.js 15 & React 19 Specialist',
    'typewriter.2': 'TypeScript & Strict Architecture',
    'typewriter.3': 'Python, Django 5 & FastAPI',
    'typewriter.4': 'Supabase & PostgreSQL Architect',
    'typewriter.5': 'AI Integration & OCR Tooling',
    'typewriter.6': 'Invitely, Merlo Participa & PARKIA SaaS',

    // About
    'about.tag': 'Background',
    'about.title': 'Robust development with product mindset',
    'about.desc': 'Combining technical rigor, development best practices, and aesthetic sensitivity to build high-performance digital products.',
    'about.card1Title': 'Full Stack Developer & Solution Creator',
    'about.card1P1': 'I specialize in the full lifecycle of software development: from relational database modeling and robust API design to building modern, interactive, and fluid user interfaces.',
    'about.card1P2': 'I have designed and built platforms such as <strong>Invitely</strong> (digital invitations SaaS), <strong>Merlo Participa</strong> (civic engagement portal & geolocated urban issue tracking), <strong>PARKIA</strong> (smart urban mobility & geolocated reservations), <strong>AI & OCR Tools</strong>, and <strong>Forge Champions</strong>.',
    'about.metric1Label': 'Flagship Apps',
    'about.metric2Label': 'Technologies',
    'about.metric3Label': 'Type-Safe & Clean Code',
    'about.card2Title': 'Core Pillars',
    'about.pillar1': '<strong>Strict TypeScript</strong> across the entire stack.',
    'about.pillar2': '<strong>AI & LLM Integration</strong> in production workflows.',
    'about.pillar3': '<strong>Modern & Fluid UI/UX</strong> design systems.',
    'about.pillar4': '<strong>Security & RLS Policies</strong> in database layer.',

    // Skills
    'skills.tag': 'Tech Matrix',
    'skills.title': 'Ecosystem & Tech Stack',
    'skills.desc': 'Modern tools and technologies I master to build resilient end-to-end web applications.',
    'skills.tabAll': 'All',
    'skills.tabFront': 'Frontend',
    'skills.tabBack': 'Backend & APIs',
    'skills.tabDb': 'Databases & Cloud',
    'skills.tabTools': 'Tools & DevOps',

    // Projects
    'projects.tag': 'Portfolio',
    'projects.title': 'Featured Projects',
    'projects.desc': 'Curated selection of real-world applications crafted for architecture, user experience, and problem solving.',
    'projects.tabAll': 'All Projects',
    'projects.tabFull': 'Fullstack & SaaS',
    'projects.tabFront': 'Frontend / UI',
    'projects.tabBack': 'Backend / APIs',
    'projects.detailsBtn': 'Architecture Details',
    'projects.viewCode': 'View code on GitHub',
    'projects.viewLive': 'View live demo',
    'projects.modalTitle': 'Architecture Details',
    'projects.modalStack': 'Tech Stack',
    'projects.modalHighlights': 'Key Technical Highlights',
    'projects.modalDiagram': 'Architecture Diagram',
    'projects.modalRepo': 'View Repository on GitHub',
    'projects.modalConsult': 'Consult via WhatsApp',

    // Experience / Timeline
    'experience.tag': 'Milestones & Career',
    'experience.title': 'Professional Timeline',
    'experience.desc': 'Continuous evolution, delivered projects, and software development capabilities.',
    'exp.invitelyDate': '2026 — Present',
    'exp.invitelyRole': 'Lead Developer — Invitely SaaS',
    'exp.invitelyOrg': 'EventTech & Interactive Digital Invitations Platform',
    'exp.invitelyDesc': 'Fullstack development with Next.js 15, TypeScript, Supabase, Tailwind CSS, and real-time RSVP with mobile delivery optimization.',
    'exp.parkiaDate': '2026',
    'exp.parkiaRole': 'Lead Fullstack Developer — PARKIA',
    'exp.parkiaOrg': 'Smart Urban Mobility & Reservation Platform',
    'exp.parkiaDesc': 'Full frontend/backend architecture with React 19, TypeScript, interactive Leaflet maps, Python Django 5 DRF backend, and JWT authentication.',
    'exp.forgeDate': '2026',
    'exp.forgeRole': 'Fullstack Developer — Forge Champions',
    'exp.forgeOrg': 'Forge Foundation • Team 7',
    'exp.forgeDesc': 'Corporate mentorship and masterclass platform connecting executives with youth talent for live sessions.',
    'exp.msaDate': 'Jan 2025 — May 2026',
    'exp.msaRole': 'QA Tester — Grupo MSA',
    'exp.msaOrg': 'Electoral Systems & High-Demand Platforms',
    'exp.msaDesc': 'Incident management, Root Cause Analysis in code and infrastructure, technical diagnostics, and close collaboration with dev teams.',
    'exp.upliveDate': '2021 — 2023',
    'exp.upliveRole': 'IT Support Analyst — Uplive',
    'exp.upliveOrg': 'Digital Technical Support & Troubleshooting',
    'exp.upliveDesc': 'Advanced technical support, systems troubleshooting, log analysis, and resolution of critical incidents under strict SLA.',

    // GitHub Stats
    'github.tag': 'Open Source & GitHub',
    'github.title': 'GitHub Stats & Open Source Activity',
    'github.desc': 'Consolidated activity metrics, language breakdown, and public repositories for',
    'github.metric1': 'Contributions',
    'github.metric1Sub': 'Annual Commits, PRs & Reviews',
    'github.metric2': 'Repositories',
    'github.metric2Sub': 'SaaS Projects, APIs & Frontends',
    'github.metric3': 'Active Streak',
    'github.metric3Sub': 'Longest streak: 4 consecutive days',
    'github.metric4': 'Quality & Tests',
    'github.metric4Sub': 'Strict TypeScript & Clean Code',
    'github.langsTitle': 'Top Languages & Core Ecosystem',
    'github.streakTitle': 'Live Activity & Streak',
    'github.activeBadge': 'Active',
    'github.pinnedTitle': 'Featured Public Repositories',
    'github.ctaTitle': 'Want to inspect the source code and my contributions?',
    'github.ctaDesc': 'Explore all my repositories, commits, and pull requests on my official GitHub account.',
    'github.btnProfile': 'View Profile @arsabot',
    'github.btnRepos': 'View All Repositories',

    // Contact
    'contact.tag': 'Get in Touch',
    'contact.title': "Let's Talk About Your Next Project",
    'contact.desc': 'Have a job opportunity, technical inquiry, or want to build something extraordinary? Reach out directly.',
    'contact.channelsTitle': 'Direct Channels',
    'contact.channelsDesc': 'Available for full-time roles, SaaS projects, remote contracts, and technical consulting.',
    'contact.formTitle': 'Send a Message',
    'contact.nameLabel': 'Your Name *',
    'contact.namePlaceholder': 'e.g. John Doe',
    'contact.emailLabel': 'Your Email *',
    'contact.emailPlaceholder': 'john@company.com',
    'contact.subjectLabel': 'Subject',
    'contact.subjectPlaceholder': 'Project proposal / Job opportunity',
    'contact.messageLabel': 'Message *',
    'contact.messagePlaceholder': 'Tell me about the project, requirements, or tech stack...',
    'contact.sendBtn': 'Send Message',
    'contact.responseTime': '🟢 Average response time: &lt; 2 hours via WhatsApp.',
    'contact.copyToast': 'Email copied to clipboard!',

    // Footer
    'footer.backTop': 'Back to top',
    'footer.brandSubtitle': 'PROFESSIONAL WEB DEVELOPMENT'
  }
};

let currentLang = localStorage.getItem('lang-preference') || 'es';
const listeners = [];

export function getCurrentLang() {
  return currentLang;
}

export function t(key) {
  return translations[currentLang]?.[key] || translations['es']?.[key] || key;
}

export function onLanguageChange(fn) {
  listeners.push(fn);
}

export function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('lang-preference', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      el.innerHTML = text;
    }
  });

  // Update Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      el.placeholder = text;
    }
  });

  // Update Titles & Tooltips
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const text = translations[lang]?.[key];
    if (text !== undefined) {
      el.title = text;
    }
  });

  // Update Active Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === lang);
  });

  // Trigger subscribers
  listeners.forEach(fn => fn(lang));

  // Re-create icons if needed
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

export function initI18n() {
  // Set initial language from storage
  setLanguage(currentLang);

  // Attach click listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });
}
