/**
 * Typewriter Effect for Hero Typewriter Pill - 100% Zero Layout Shift
 */
export function initTypewriter() {
  const targetElement = document.getElementById('typewriter-text');
  if (!targetElement) return;

  const words = [
    'Next.js 15 & React 19',
    'Python & Django 5',
    'TypeScript & REST APIs',
    'Supabase & PostgreSQL',
    'AI Tools & Web Apps',
    'Invitely & PARKIA SaaS'
  ];

  let wordIndex = 0;
  let charIndex = words[0].length;
  let isDeleting = true;
  let typingSpeed = 2200;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      targetElement.textContent = charIndex > 0 ? currentWord.substring(0, charIndex) : '\u00A0';
      typingSpeed = 35;
    } else {
      charIndex++;
      targetElement.textContent = currentWord.substring(0, charIndex);
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause when full word is typed
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  // Start animation loop
  setTimeout(type, typingSpeed);
}
