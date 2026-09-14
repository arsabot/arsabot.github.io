/**
 * Main Application Orchestrator - With Dual Theme (Dark/Light) Switcher
 */
import { initTypewriter } from './typewriter.js';
import { initProjects } from './projects.js';
import { initStats, showToast } from './stats.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme-preference') || (prefersDark ? 'dark' : 'dark');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme-preference', theme);

    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
        themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
      }
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Initial Theme Application
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(`Modo ${nextTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`, nextTheme === 'dark' ? 'moon' : 'sun');
    });
  }

  // 2. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Initialize Subsystems
  initTypewriter();
  initProjects();
  initStats();

  // 4. Header Scroll Glassmorphism
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 5. ScrollSpy & Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // 6. Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 7. Skills Category Filter Matrix
  const skillTabs = document.querySelectorAll('.skill-filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-skill-filter');

      skillCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 8. Real Contact Form Submission (via FormSubmit API to rodrigonasaavedra@gmail.com)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject')?.value.trim() || 'Contacto desde Portafolio Web';
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Por favor, completa todos los campos requeridos.', 'alert-circle');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i data-lucide="loader" class="animate-spin" style="width: 18px; height: 18px;"></i>
        Enviando correo real...
      `;
      if (window.lucide) window.lucide.createIcons();

      try {
        const response = await fetch('https://formsubmit.co/ajax/rodrigonasaavedra@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: `[Portafolio] ${subject} - ${name}`,
            message: message,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const result = await response.json();

        if (response.ok || result.success === "true" || result.success === true) {
          contactForm.reset();
          showToast('¡Mensaje enviado con éxito a mi casilla! Te responderé pronto.', 'check-circle');
        } else if (result.message && result.message.includes('Activation')) {
          showToast('Por favor, activa tu correo en el email que te envió FormSubmit.', 'mail');
        } else {
          throw new Error(result.message || 'Error al enviar');
        }
      } catch (err) {
        console.warn('Fallback a mailto activado:', err);
        // Fallback directo a mailto si hay bloqueo de red
        const mailtoUrl = `mailto:rodrigonasaavedra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name} (${email})\n\nMensaje:\n${message}`)}`;
        window.location.href = mailtoUrl;
        contactForm.reset();
        showToast('Abriendo tu cliente de correo...', 'mail');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
});
