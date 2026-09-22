/**
 * Horizontal Timeline Interactive Controller
 * Ultra-Smooth Kinetic Momentum Drag Physics, Snap Synchronization & Responsive Controls
 */

export function initHorizontalTimeline() {
  const track = document.getElementById('timeline-track');
  const prevBtn = document.getElementById('timeline-prev-btn');
  const nextBtn = document.getElementById('timeline-next-btn');
  const dotsContainer = document.getElementById('timeline-carousel-dots');
  const dragHint = document.getElementById('timeline-drag-hint');

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
        stopMomentum();
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
      stopMomentum();
      track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopMomentum();
      track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  }

  // 3. Sync active dot on scroll
  let scrollTimeout;
  function updateActiveDot() {
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
  }

  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveDot, 25);
  }, { passive: true });

  // 4. Ultra-Smooth Kinetic Momentum Drag Physics Engine
  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0;
  let momentumRaf = null;
  let hasMoved = false;

  function stopMomentum() {
    if (momentumRaf) {
      cancelAnimationFrame(momentumRaf);
      momentumRaf = null;
    }
  }

  function startMomentum() {
    stopMomentum();
    const friction = 0.94;
    const minVelocity = 0.3;

    function step() {
      if (Math.abs(velocity) > minVelocity) {
        track.scrollLeft -= velocity;
        velocity *= friction;
        updateActiveDot();
        momentumRaf = requestAnimationFrame(step);
      } else {
        stopMomentum();
        track.classList.remove('is-dragging');
        track.style.scrollSnapType = 'x mandatory';
        track.style.scrollBehavior = 'smooth';
        if (dragHint) dragHint.classList.remove('active');
      }
    }
    momentumRaf = requestAnimationFrame(step);
  }

  function handleDown(pageX) {
    stopMomentum();
    isDown = true;
    hasMoved = false;
    startX = pageX;
    startScrollLeft = track.scrollLeft;
    lastX = pageX;
    lastTime = performance.now();
    velocity = 0;

    track.classList.add('is-dragging');
    track.style.scrollSnapType = 'none';
    track.style.scrollBehavior = 'auto';
    if (dragHint) dragHint.classList.add('active');
  }

  function handleMove(pageX) {
    if (!isDown) return;
    const deltaX = pageX - startX;
    if (Math.abs(deltaX) > 4) {
      hasMoved = true;
    }

    const now = performance.now();
    const dt = Math.max(now - lastTime, 8);
    const dx = pageX - lastX;

    // Fluid velocity calculation
    velocity = (dx / dt) * 16;

    lastX = pageX;
    lastTime = now;

    track.scrollLeft = startScrollLeft - deltaX;
  }

  function handleUp() {
    if (!isDown) return;
    isDown = false;

    if (Math.abs(velocity) > 1.2) {
      startMomentum();
    } else {
      track.classList.remove('is-dragging');
      track.style.scrollSnapType = 'x mandatory';
      track.style.scrollBehavior = 'smooth';
      if (dragHint) dragHint.classList.remove('active');
    }
  }

  // Mouse Listeners
  track.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    handleDown(e.pageX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    handleMove(e.pageX);
  });

  window.addEventListener('mouseup', () => {
    if (isDown) handleUp();
  });

  // Touch enhancements
  track.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      stopMomentum();
      if (dragHint) dragHint.classList.add('active');
    }
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (dragHint) dragHint.classList.remove('active');
  }, { passive: true });

  // Prevent link click when dragging was performed
  track.addEventListener('click', (e) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      hasMoved = false;
    }
  }, true);

  // Wheel horizontal assist
  track.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      stopMomentum();
    }
  }, { passive: true });
}
