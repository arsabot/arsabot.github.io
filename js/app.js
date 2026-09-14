/**
 * Main Application Orchestrator
 */
import { initTypewriter } from './typewriter.js';
import { initProjects } from './projects.js';
import { initStats, showToast } from './stats.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Initialize Subsystems
  initTypewriter();
  initProjects();
  initStats();

  // 3. Header Scroll Glassmorphism
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. ScrollSpy & Navigation Links
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

  // 5. Mobile Drawer Toggle
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

  // 6. Skills Category Filter Matrix
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

  // 7. Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Por favor, completa todos los campos requeridos.', 'alert-circle');
        return;
      }

      // Simulate sending
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i data-lucide="loader" class="animate-spin" style="width: 18px; height: 18px;"></i>
        Enviando mensaje...
      `;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
        showToast('¡Mensaje enviado con éxito! Te responderé a la brevedad.', 'check-circle');
      }, 1000);
    });
  }
});
