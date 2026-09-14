/**
 * Stats, Counters, Theme State & Toast Notification System
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

function animateCounters(elements) {
  elements.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target') || '0', 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 35));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = current + suffix;
      }
    }, 30);
  });
}

export function initStats() {
  // Animated Counters for About Section
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    let aboutAnimated = false;
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !aboutAnimated) {
          aboutAnimated = true;
          const counters = aboutSection.querySelectorAll('.metric-num');
          animateCounters(counters);
        }
      });
    }, { threshold: 0.3 });
    aboutObserver.observe(aboutSection);
  }

  // Animated Counters for GitHub Stats Section
  const githubSection = document.getElementById('github-stats');
  if (githubSection) {
    let githubAnimated = false;
    const githubObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !githubAnimated) {
          githubAnimated = true;
          const counters = githubSection.querySelectorAll('.github-metric-num');
          animateCounters(counters);

          // Animate Progress Bar Segments
          const langSegments = githubSection.querySelectorAll('.lang-seg');
          langSegments.forEach(seg => {
            const pct = seg.getAttribute('data-pct') || '0';
            seg.style.width = pct + '%';
          });
        }
      });
    }, { threshold: 0.25 });
    githubObserver.observe(githubSection);

    // Dynamic Live Fetch from GitHub Public API
    fetchGitHubStats();
  }

  // Copy Email Button Listener (Updated Email: rodrigonasaavedra@gmail.com)
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'rodrigonasaavedra@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('¡Email copiado al portapapeles! (' + email + ')', 'check');
      }).catch(() => {
        showToast('Email: ' + email, 'mail');
      });
    });
  }
}

async function fetchGitHubStats() {
  try {
    const res = await fetch('https://api.github.com/users/arsabot');
    if (!res.ok) return;
    const data = await res.json();
    
    if (data.public_repos !== undefined) {
      const repoCounter = document.getElementById('github-public-repos-val');
      if (repoCounter) {
        repoCounter.setAttribute('data-target', data.public_repos);
        repoCounter.textContent = data.public_repos;
      }
    }
  } catch (err) {
    console.debug('GitHub live sync fallback to static metrics:', err);
  }
}
