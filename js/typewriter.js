/**
 * Typewriter Effect for Hero Title / Role
 */
export function initTypewriter() {
  const targetElement = document.getElementById('typewriter-text');
  if (!targetElement) return;

  const words = [
    'Fullstack Developer',
    'Next.js & React Specialist',
    'Python & Node.js Engineer',
    'Cloud & REST APIs Architect',
    'UI/UX & Performance Enthusiast'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      targetElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      targetElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}
