/**
 * Projects Data & Showcase Controller
 */

export const projectsData = [
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
          <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, ${p.accentColor}22 0%, #0e1424 80%); display: flex; align-items: center; justify-content: center;">
            <i data-lucide="${p.icon}" style="width: 56px; height: 56px; color: ${p.accentColor}; opacity: 0.9;"></i>
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
                <i data-lucide="github" style="width: 18px; height: 18px;"></i>
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
  }

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalContent || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span class="section-tag" style="margin-bottom: 0;">${project.categoryLabel}</span>
      </div>
      <h2 style="font-size: 1.85rem; margin-bottom: 1rem; color: #ffffff;">${project.title}</h2>
      <p style="font-size: 1.05rem; margin-bottom: 1.5rem;">${project.shortDesc}</p>

      <h4 class="modal-section-title">
        <i data-lucide="cpu" style="width: 20px; height: 20px;"></i>
        Stack Tecnológico
      </h4>
      <div class="project-tags" style="margin-bottom: 1.5rem;">
        ${project.tags.map(t => `<span class="project-tag" style="background: rgba(99, 102, 241, 0.15); border-color: rgba(99, 102, 241, 0.4); color: #fff;">${t}</span>`).join('')}
      </div>

      <h4 class="modal-section-title">
        <i data-lucide="check-circle-2" style="width: 20px; height: 20px;"></i>
        Aspectos Técnicos Destacados
      </h4>
      <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
        ${project.highlights.map(h => `
          <li style="display: flex; align-items: flex-start; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
            <i data-lucide="chevron-right" style="width: 18px; height: 18px; color: var(--accent-secondary); flex-shrink: 0; margin-top: 2px;"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <h4 class="modal-section-title">
        <i data-lucide="git-branch" style="width: 20px; height: 20px;"></i>
        Diagrama de Arquitectura
      </h4>
      <div style="background: rgba(0, 0, 0, 0.4); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan-light); overflow-x: auto; margin-bottom: 2rem;">
        ${project.architecture}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i data-lucide="github" style="width: 18px; height: 18px;"></i>
          Ver Repositorio en GitHub
        </a>
        <a href="${project.liveUrl}" class="btn btn-secondary">
          <i data-lucide="external-link" style="width: 18px; height: 18px;"></i>
          Explorar Proyecto
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
