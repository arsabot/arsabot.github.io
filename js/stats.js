/**
 * Stats, Counters & Toast Notification System
 */

export function showToast(message, iconName = 'check-circle') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${iconName}" style="width: 20px; height: 20px; color: var(--accent-emerald);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

export function initStats() {
  // Animated Counters
  const counters = document.querySelectorAll('.metric-num');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = Math.ceil(target / 40) || 1;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = current + suffix;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('about');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // Copy Email Button Listener
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'arie19972012@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('¡Email copiado al portapapeles! (' + email + ')', 'check');
      }).catch(() => {
        showToast('Email: ' + email, 'mail');
      });
    });
  }
}
