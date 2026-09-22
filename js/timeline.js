/**
 * Horizontal Timeline Interactive Controller
 * Smooth scroll navigation, drag-to-scroll, dot pagination & responsive gestures
 */

export function initHorizontalTimeline() {
  const track = document.getElementById('timeline-track');
  const prevBtn = document.getElementById('timeline-prev-btn');
  const nextBtn = document.getElementById('timeline-next-btn');
  const dotsContainer = document.getElementById('timeline-carousel-dots');

  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.timeline-node-card'));
  if (cards.length === 0) return;

  // 1. Build pagination dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir al hito ${i + 1}`);
      dot.addEventListener('click', () => {
        cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.carousel-dot')) : [];

  // 2. Navigation Button Clicks
  const getScrollAmount = () => {
    const card = track.querySelector('.timeline-node-card');
    return card ? card.offsetWidth + 24 : 360;
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  }

  // 3. Sync active dot on scroll
  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const containerRect = track.getBoundingClientRect();
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

  // 4. Mouse Drag-to-Scroll Support
  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    track.style.scrollBehavior = 'auto';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    if (isDown) {
      isDown = false;
      track.style.cursor = 'grab';
      track.style.scrollBehavior = 'smooth';
    }
  });

  track.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      track.style.cursor = 'grab';
      track.style.scrollBehavior = 'smooth';
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}
