import { initTetrisBackground } from './tetris-bg.js?v=5.0';
/**
 * Main Application Orchestrator - With Dual Theme (Dark/Light) & Bilingual (ES/EN) Switchers
 */
import { initI18n, getCurrentLang, onLanguageChange } from './i18n.js?v=5.0';
import { initTypewriter } from './typewriter.js?v=5.0';
import { initProjects } from './projects.js?v=5.0';
import { initStats, showToast } from './stats.js?v=5.0';
import { initHorizontalTimeline } from './timeline.js?v=5.0';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n
  initI18n();

  onLanguageChange((lang) => {
    const msg = lang === 'en' ? 'Language switched to English 🇬🇧' : 'Idioma cambiado a Español 🇪🇸';
    showToast(msg, 'globe');
  });

  // 2. Theme Management (Dark / Light Mode)
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
        const titleText = theme === 'dark' 
          ? (getCurrentLang() === 'en' ? 'Switch to Light Mode' : 'Cambiar a Modo Claro')
          : (getCurrentLang() === 'en' ? 'Switch to Dark Mode' : 'Cambiar a Modo Oscuro');
        themeToggleBtn.setAttribute('title', titleText);
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
      const isEn = getCurrentLang() === 'en';
      const toastText = nextTheme === 'dark' 
        ? (isEn ? 'Dark Mode activated' : 'Modo Oscuro activado')
        : (isEn ? 'Light Mode activated' : 'Modo Claro activado');
      showToast(toastText, nextTheme === 'dark' ? 'moon' : 'sun');
    });
  }

  // 3. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 4. Initialize Subsystems
  initTetrisBackground();
  initTypewriter();
  initProjects();
  initStats();
  initHorizontalTimeline();

  // 5. CV Dropdown Toggles (Click outside support & Touch support)
  const cvDropdowns = document.querySelectorAll('.cv-dropdown-wrapper');
  cvDropdowns.forEach(wrapper => {
    const trigger = wrapper.querySelector('.cv-dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = wrapper.classList.contains('open');
        cvDropdowns.forEach(w => w.classList.remove('open'));
        if (!isOpen) {
          wrapper.classList.add('open');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.cv-dropdown-wrapper')) {
      cvDropdowns.forEach(w => w.classList.remove('open'));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cvDropdowns.forEach(w => w.classList.remove('open'));
    }
  });

  // 6. Header Scroll Glassmorphism
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 7. ScrollSpy & Navigation Links
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

  // 8. Mobile Drawer Toggle with Icon Flip & Outside Click Detection
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    const toggleDrawer = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
      mobileDrawer.classList.toggle('open', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDrawer();
    });

    mobileDrawer.querySelectorAll('.nav-link, .cv-dropdown-item, .lang-btn, a').forEach(link => {
      link.addEventListener('click', () => {
        toggleDrawer(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleDrawer(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1120 && mobileDrawer.classList.contains('open')) {
        toggleDrawer(false);
      }
    });
  }

  // 9. Skills Category Filter Matrix
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

  // 10. Copy Email Button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('rodrigonasaavedra@gmail.com').then(() => {
        const isEn = getCurrentLang() === 'en';
        showToast(isEn ? 'Email copied to clipboard!' : '¡Email copiado al portapapeles!', 'copy');
      });
    });
  }

  // 11. Real Contact Form Submission (via FormSubmit API to rodrigonasaavedra@gmail.com)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const isEn = getCurrentLang() === 'en';
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject')?.value.trim() || 'Contacto desde Portafolio Web';
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast(isEn ? 'Please fill in all required fields.' : 'Por favor, completa todos los campos requeridos.', 'alert-circle');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i data-lucide="loader" class="animate-spin" style="width: 18px; height: 18px;"></i>
        ${isEn ? 'Sending email...' : 'Enviando correo real...'}
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
          showToast(isEn ? 'Message sent successfully! I will reply soon.' : '¡Mensaje enviado con éxito a mi casilla! Te responderé pronto.', 'check-circle');
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
        showToast(isEn ? 'Opening your email client...' : 'Abriendo tu cliente de correo...', 'mail');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
});
