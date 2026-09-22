/**
 * High-Performance Tetris Ambient Background Canvas
 * Floating cyberpunk glassmorphic tetrominoes with parallax, subtle glow, and 60fps drift
 */

export function initTetrisBackground() {
  const canvas = document.getElementById('tetris-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let lastScrollY = window.scrollY || window.pageYOffset || 0;
  let scrollDelta = 0;
  let mouseX = -1000;
  let mouseY = -1000;

  // Tetromino definitions
  const PIECE_TYPES = [
    {
      name: 'I',
      matrix: [[1, 1, 1, 1]],
      color: 'rgba(6, 182, 212, ', // Cyan
      glow: '#06b6d4'
    },
    {
      name: 'O',
      matrix: [
        [1, 1],
        [1, 1]
      ],
      color: 'rgba(234, 179, 8, ', // Yellow
      glow: '#eab308'
    },
    {
      name: 'T',
      matrix: [
        [0, 1, 0],
        [1, 1, 1]
      ],
      color: 'rgba(168, 85, 247, ', // Purple
      glow: '#a855f7'
    },
    {
      name: 'S',
      matrix: [
        [0, 1, 1],
        [1, 1, 0]
      ],
      color: 'rgba(34, 197, 94, ', // Green
      glow: '#22c55e'
    },
    {
      name: 'Z',
      matrix: [
        [1, 1, 0],
        [0, 1, 1]
      ],
      color: 'rgba(244, 63, 94, ', // Red/Rose
      glow: '#f43f5e'
    },
    {
      name: 'J',
      matrix: [
        [1, 0, 0],
        [1, 1, 1]
      ],
      color: 'rgba(59, 130, 246, ', // Blue
      glow: '#3b82f6'
    },
    {
      name: 'L',
      matrix: [
        [0, 0, 1],
        [1, 1, 1]
      ],
      color: 'rgba(249, 115, 22, ', // Orange
      glow: '#f97316'
    }
  ];

  class Tetromino {
    constructor(isInitial = false) {
      this.reset(isInitial);
    }

    reset(isInitial = false) {
      const type = PIECE_TYPES[Math.floor(Math.random() * PIECE_TYPES.length)];
      this.matrix = type.matrix;
      this.colorBase = type.color;
      this.glowColor = type.glow;

      // Scale & Layering (Depth of field)
      this.depth = Math.random() * 0.7 + 0.3; // 0.3 (deep/small) to 1.0 (near/large)
      this.blockSize = (14 + this.depth * 14); // 18px - 28px
      this.alpha = (0.08 + this.depth * 0.16); // 0.12 - 0.28
      this.parallaxFactor = (this.depth - 0.5) * 0.3;

      // Positioning
      this.x = Math.random() * width;
      this.y = isInitial ? Math.random() * height : -80 - Math.random() * 100;

      // Motion velocities
      this.vy = 0.25 + this.depth * 0.55; // Gentle downward speed
      this.vx = (Math.random() - 0.5) * 0.35; // Slight drift
      this.swaySpeed = 0.001 + Math.random() * 0.002;
      this.swayAmount = 15 + Math.random() * 25;
      this.swayPhase = Math.random() * Math.PI * 2;

      // Rotation
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.008;

      // Dimensions of the matrix
      this.rows = this.matrix.length;
      this.cols = this.matrix[0].length;
      this.pixelWidth = this.cols * this.blockSize;
      this.pixelHeight = this.rows * this.blockSize;
    }

    update(time, scrollOffset) {
      // Normal drift + sine wave sway
      this.y += this.vy + scrollOffset * this.parallaxFactor;
      this.x += this.vx + Math.sin(time * this.swaySpeed + this.swayPhase) * 0.25;
      this.rotation += this.rotSpeed;

      // Mouse gentle repulsion
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180 && dist > 0) {
        const force = (180 - dist) / 180 * 0.8;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
      }

      // Wrap around bounds
      const margin = 100;
      if (this.y > height + margin) {
        this.reset(false);
      } else if (this.y < -margin * 2) {
        this.y = height + margin;
      }

      if (this.x > width + margin) {
        this.x = -margin;
      } else if (this.x < -margin) {
        this.x = width + margin;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);

      const halfW = this.pixelWidth / 2;
      const halfH = this.pixelHeight / 2;
      const radius = 3;
      const bSize = this.blockSize;
      const pad = 2; // Spacing between blocks

      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (this.matrix[r][c] === 1) {
            const bx = c * bSize - halfW;
            const by = r * bSize - halfH;
            const w = bSize - pad;
            const h = bSize - pad;

            // Draw rounded square with glassmorphism fill & neon stroke
            ctx.beginPath();
            if (ctx.roundRect) {
              ctx.roundRect(bx, by, w, h, radius);
            } else {
              ctx.rect(bx, by, w, h);
            }

            // Fill
            ctx.fillStyle = `${this.colorBase}${this.alpha})`;
            ctx.fill();

            // Glow Stroke
            ctx.shadowColor = this.glowColor;
            ctx.shadowBlur = 8 * this.depth;
            ctx.strokeStyle = `${this.colorBase}${this.alpha * 1.6})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();

            // Inner subtle highlight bevel
            ctx.beginPath();
            if (ctx.roundRect) {
              ctx.roundRect(bx + 1.5, by + 1.5, Math.max(1, w - 3), Math.max(1, h - 3), Math.max(1, radius - 1));
            } else {
              ctx.rect(bx + 1.5, by + 1.5, Math.max(1, w - 3), Math.max(1, h - 3));
            }
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      ctx.restore();
    }
  }

  let pieces = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Piece density based on screen size
    const count = width < 768 ? 10 : (width < 1200 ? 15 : 22);
    pieces = Array.from({ length: count }, () => new Tetromino(true));
  }

  // Scroll listener for parallax
  function onScroll() {
    const currentScrollY = window.scrollY || window.pageYOffset || 0;
    scrollDelta = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;
  }

  // Mouse move for interaction
  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function onMouseLeave() {
    mouseX = -1000;
    mouseY = -1000;
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('mouseleave', onMouseLeave, { passive: true });

  resize();

  // Animation Loop
  let isRunning = true;

  function render(time) {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    // Apply scroll parallax dampening
    const activeScrollDelta = scrollDelta;
    scrollDelta *= 0.88; // Smooth decay

    for (let i = 0; i < pieces.length; i++) {
      pieces[i].update(time, activeScrollDelta);
      pieces[i].draw(ctx);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  animationFrameId = requestAnimationFrame(render);

  // Pause when page is hidden to preserve battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      isRunning = true;
      lastScrollY = window.scrollY || window.pageYOffset || 0;
      scrollDelta = 0;
      animationFrameId = requestAnimationFrame(render);
    }
  });
}
