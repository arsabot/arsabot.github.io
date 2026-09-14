/**
 * Projects Data & Showcase Controller - Updated with Invitely & AI Text Reader
 */

export const projectsData = [
  {
    id: 'invitely',
    title: 'Invitely — Plataforma de Invitaciones Digitales Interactivas',
    category: 'fullstack',
    categoryLabel: 'SaaS / EventTech',
    shortDesc: 'Plataforma integral para crear, personalizar y enviar invitaciones interactivas con RSVP en tiempo real, gestión de listas de invitados y animaciones personalizadas.',
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL', 'Realtime RSVP', 'Framer Motion'],
    githubUrl: 'https://github.com/arsabot/invitely',
    liveUrl: 'https://invitely-delta-dun.vercel.app/login',
    accentColor: '#a855f7',
    icon: 'sparkles',
    highlights: [
      'Editor visual en tiempo real para personalización de plantillas de eventos, tipografías y paletas.',
      'Sistema de confirmación de asistencia (RSVP) con sincronización en vivo y estadísticas de invitados.',
      'Integración con Supabase para almacenamiento de fotos de eventos y políticas de acceso por evento.',
      'Diseño responsive optimizado para visualización móvil instantánea desde enlaces de WhatsApp e Instagram.'
    ],
    architecture: `Cliente Next.js 15 (App Router + TypeScript) ───[Server Actions / Realtime]───> Supabase BaaS (PostgreSQL + RLS) ───> CDN Media Storage`
  },
  {
    id: 'ai-text-reader',
    title: 'Lector de Textos con Inteligencia Artificial & OCR',
    category: 'fullstack',
    categoryLabel: 'AI & Data Tools',
    shortDesc: 'Herramienta inteligente de accesibilidad y productividad con síntesis de voz neuronal (TTS), extracción OCR de documentos/imágenes y resumen contextual con IA.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'OpenAI / Gemini API', 'Web Speech API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/arsabot',
    liveUrl: 'https://arsabot.github.io/#projects',
    accentColor: '#8b5cf6',
    icon: 'bot',
    highlights: [
      'Extracción y procesamiento óptico de caracteres (OCR) a partir de PDFs, capturas e imágenes escaneadas.',
      'Generación de resúmenes inteligentes y puntos clave utilizando modelos de lenguaje LLM.',
      'Síntesis de voz fluida multi-idioma con controles de velocidad, tono y marcado visual de lectura sincronizada.',
      'Arquitectura de API en Python FastAPI con streaming asíncrono de respuestas.'
    ],
    architecture: `React SPA (Speech & OCR Visualizer) ───[WebSocket / REST Streaming]───> Python FastAPI Backend ───> LLM & Neural TTS Services`
  },
  {
    id: 'parkia',
    title: 'PARKIA — Smart Parking & Reservation Platform',
    category: 'fullstack',
    categoryLabel: 'Fullstack Platform',
    shortDesc: 'Solución integral de movilidad urbana para conductores y dueños de estacionamientos con geolocalización, reserva en tiempo real y panel analítico.',
    tags: ['React 19', 'TypeScript', 'Django 5', 'Django REST', 'Leaflet', 'Recharts', 'Tailwind CSS', 'JWT'],
    githubUrl: 'https://github.com/arsabot/parkia',
    liveUrl: 'https://arsabot.github.io/#projects',
    accentColor: '#38bdf8',
    icon: 'car',
    highlights: [
      'Mapa interactivo con Leaflet & CartoDB con renderizado de pines de tarifas en tiempo real.',
      'Motor de reservas con validación de no-superposición de horarios y emisión de ticket único PK-XXXXXX.',
      'Panel administrativo para garajistas con métricas de ocupación, ingresos y gráficos Recharts.',
      'Backend en Django 5 con autenticación JWT, roles diferenciados (conductor / admin) y suite de 13 tests.'
    ],
    architecture: `Cliente SPA (React 19 + Vite + TypeScript) ───[REST API / JWT]───> Backend Django 5 (DRF) ───> PostgreSQL / SQLite Database`
  },
  {
    id: 'forge-champions',
    title: 'Forge Champions — Portal & Mentorship Landing',
    category: 'fullstack',
    categoryLabel: 'Enterprise EdTech',
    shortDesc: 'Plataforma para la Fundación Forge que conecta a ejecutivos de alto nivel con talento joven mediante masterclasses en vivo, mentorías y registro automatizado.',
    tags: ['Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'AWS EC2', 'PM2'],
    githubUrl: 'https://github.com/arsabot/forge-champions',
    liveUrl: 'https://arsabot.github.io/#projects',
    accentColor: '#6366f1',
    icon: 'graduation-cap',
    highlights: [
      'Desarrollado con Next.js 15 App Router y Server Actions para rendimiento y SEO de alta fidelidad.',
      'Capa de datos con Supabase y PostgreSQL configurando Row Level Security (RLS) y esquemas relacionales.',
      'Diseño responsivo optimizado para retención de usuarios y conversión en masterclasses corporativas.',
      'Despliegue y administración continua en AWS EC2 con PM2 para alta disponibilidad.'
    ],
    architecture: `Next.js 15 (SSR + App Router) ───[Server Actions & REST]───> Supabase BaaS (PostgreSQL + RLS) ───> AWS EC2 Production Node`
  },
  {
    id: 'informar-app',
    title: 'Informar App — Real-Time Ingestion & Analytics',
    category: 'frontend',
    categoryLabel: 'Data & Analytics',
    shortDesc: 'Dashboard de analítica e ingesta continua de datos con renderizado reactivo de alta velocidad, linting estricto y componentes modulares.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Oxlint', 'Real-time Streams'],
    githubUrl: 'https://github.com/arsabot/informar-app',
    liveUrl: 'https://arsabot.github.io/#projects',
    accentColor: '#10b981',
    icon: 'bar-chart-2',
    highlights: [
      'Arquitectura de ingesta de datos con procesamiento en tiempo real.',
      'Configuración avanzada de Oxlint para auditoría estricta de código y Type-Aware linting.',
      'Interfaz modular de visualización de métricas con micro-interacciones de alta fluidez.',
      'Optimización de bundle con Vite para carga ultra rápida (< 0.5s).'
    ],
    architecture: `Pipeline de Ingesta (Streams) ───> State Management ───> Dashboard React UI (Vite + Oxlint)`
  },
  {
    id: 'api-gateway',
    title: 'Enterprise REST & Auth Gateway',
    category: 'backend',
    categoryLabel: 'Backend & APIs',
    shortDesc: 'Microservicio de autenticación, rate limiting y enrutamiento centralizado para ecosistemas distribuidos de aplicaciones web y móviles.',
    tags: ['Node.js', 'Express', 'JWT', 'Redis', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/arsabot',
    liveUrl: 'https://arsabot.github.io/#projects',
    accentColor: '#ec4899',
    icon: 'server',
    highlights: [
      'Control de tráfico y Rate Limiting mediante Redis para protección contra ataques de fuerza bruta.',
      'Emisión y rotación segura de tokens JWT (Access & Refresh tokens).',
      'Documentación interactiva OpenAPI / Swagger automatizada.',
      'Contenedorización lista para producción con Docker Compose y healthchecks.'
    ],
    architecture: `Client Requests ───> Reverse Proxy / Gateway ───> [Auth Middleware + Rate Limiter] ───> Microservices Layer`
  }
];

export function initProjects() {
  const container = document.getElementById('projects-grid');
  const filterTabs = document.querySelectorAll('.project-tab');
  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const closeModalBtn = document.getElementById('modal-close-btn');

  if (!container) return;

  function renderProjects(filter = 'all') {
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    container.innerHTML = filtered.map(p => `
      <article class="project-card fade-in" data-category="${p.category}">
        <div class="project-thumb">
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, ${p.accentColor}28 0%, var(--bg-secondary) 80%); display: flex; align-items: center; justify-content: center;">
            <i data-lucide="${p.icon}" style="width: 56px; height: 56px; color: ${p.accentColor}; opacity: 0.95;"></i>
          </div>
          <span class="project-category-badge">${p.categoryLabel}</span>
        </div>

        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.shortDesc}</p>

          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>

          <div class="project-footer">
            <button class="btn btn-secondary btn-sm open-details-btn" data-id="${p.id}">
              <i data-lucide="layers" style="width: 16px; height: 16px;"></i>
              Detalles de Arquitectura
            </button>
            <div class="project-links">
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Ver código en GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="${p.liveUrl}" class="icon-btn" title="Ver demo en vivo">
                <i data-lucide="external-link" style="width: 18px; height: 18px;"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Re-initialize Lucide icons for dynamically created markup
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach click listeners to details buttons
    container.querySelectorAll('.open-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openModal(id);
      });
    });

    // Update Mobile Carousel Dots
    updateCarouselDots(filtered.length);
    container.scrollTo({ left: 0, behavior: 'instant' });
  }

  function updateCarouselDots(total) {
    const dotsContainer = document.getElementById('proj-carousel-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = Array.from({ length: total }, (_, i) => `
      <span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" role="button" aria-label="Ir al proyecto ${i + 1}"></span>
    `).join('');

    dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);
        const cards = container.querySelectorAll('.project-card');
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    });
  }

  // Scroll synchronization for active carousel dot
  let scrollTimeout;
  container.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const cards = container.querySelectorAll('.project-card');
      const dots = document.querySelectorAll('#proj-carousel-dots .carousel-dot');
      if (!cards.length || !dots.length) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      });

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === closestIdx);
      });
    }, 40);
  }, { passive: true });

  // Mobile arrow controls
  const prevBtn = document.getElementById('proj-prev-btn');
  const nextBtn = document.getElementById('proj-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const card = container.querySelector('.project-card');
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const card = container.querySelector('.project-card');
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalContent || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span class="section-tag" style="margin-bottom: 0;">${project.categoryLabel}</span>
      </div>
      <h2 style="font-size: 1.85rem; margin-bottom: 1rem; color: var(--text-primary);">${project.title}</h2>
      <p style="font-size: 1.05rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${project.shortDesc}</p>

      <h4 class="modal-section-title">
        <i data-lucide="cpu" style="width: 20px; height: 20px;"></i>
        Stack Tecnológico
      </h4>
      <div class="project-tags" style="margin-bottom: 1.5rem;">
        ${project.tags.map(t => `<span class="project-tag" style="background: rgba(139, 92, 246, 0.15); border-color: rgba(139, 92, 246, 0.4); color: var(--text-primary);">${t}</span>`).join('')}
      </div>

      <h4 class="modal-section-title">
        <i data-lucide="check-circle-2" style="width: 20px; height: 20px;"></i>
        Aspectos Técnicos Destacados
      </h4>
      <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
        ${project.highlights.map(h => `
          <li style="display: flex; align-items: flex-start; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
            <i data-lucide="chevron-right" style="width: 18px; height: 18px; color: var(--accent-primary); flex-shrink: 0; margin-top: 2px;"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <h4 class="modal-section-title">
        <i data-lucide="git-branch" style="width: 20px; height: 20px;"></i>
        Diagrama de Arquitectura
      </h4>
      <div style="background: rgba(0, 0, 0, 0.35); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary-light); overflow-x: auto; margin-bottom: 2rem;">
        ${project.architecture}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          Ver Repositorio en GitHub
        </a>
        <a href="https://wa.me/5491135094661?text=Hola%20Ariel,%20vi%20tu%20proyecto%20${encodeURIComponent(project.title)}%20y%20me%20gustar%C3%ADa%20conversar" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366" style="margin-right: 2px;"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.761.882 2.796.883h.005c3.179 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.77-5.773-5.77zm3.393 8.163c-.144.405-.837.774-1.17.823-.312.045-.698.077-2.176-.534-1.89-.781-3.099-2.712-3.193-2.838-.095-.126-.763-.984-.763-1.876 0-.891.468-1.328.634-1.508.167-.18.365-.225.487-.225.122 0 .243.002.348.007.112.006.262-.042.41.312.152.365.518 1.264.563 1.355.045.091.076.198.016.32-.061.121-.091.198-.182.304-.091.106-.192.237-.274.318-.091.09-.187.189-.081.371.106.182.473.78 1.012 1.26.694.617 1.279.808 1.461.899.182.091.289.076.395-.046.107-.121.456-.532.578-.715.121-.182.243-.152.409-.091.167.061 1.059.499 1.241.59.182.091.304.137.349.213.045.076.045.441-.099.846zm-3.424-10.335c-4.409 0-7.994 3.585-7.994 7.994 0 1.411.368 2.784 1.066 3.993l-1.134 4.141 4.237-1.111c1.167.636 2.485.971 3.825.971h.005c4.408 0 7.994-3.586 7.994-7.995 0-4.409-3.586-7.993-7.999-7.993zm0 17.5c-1.332 0-2.637-.354-3.777-.999l-.271-.153-2.505.657.669-2.443-.167-.266c-.71-1.129-1.085-2.437-1.085-3.79 0-3.957 3.22-7.176 7.179-7.176 3.957 0 7.176 3.22 7.176 7.177 0 3.957-3.22 7.177-7.176 7.177z"/></svg>
          Consultar por WhatsApp
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Filter tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('all');
}
