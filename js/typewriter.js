/**
 * Typewriter Effect for Hero Title / Role - Zero Layout Shift
 */
export function initTypewriter() {
  const targetElement = document.getElementById('typewriter-text');
  if (!targetElement) return;

  const words = [
    'Fullstack Developer',
    'Next.js & React Expert',
    'Python & Django Engineer',
    'Cloud & APIs Architect',
    'UI/UX & Web Creator'
  ];

  let wordIndex = 0;
  let charIndex = words[0].length;
  let isDeleting = true; // start after initial display
  let typingSpeed = 2000;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      targetElement.textContent = charIndex > 0 ? currentWord.substring(0, charIndex) : '\u00A0';
      typingSpeed = 45;
    } else {
      charIndex++;
      targetElement.textContent = currentWord.substring(0, charIndex);
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      typingSpeed = 2400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  // Initial delay
  setTimeout(type, typingSpeed);
}

