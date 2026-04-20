// 🔍 Get the elements we need
const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

// 📝 Words to cycle through
const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

// ⚙️ Settings (tweak these to change speed/feel)
const typeSpeed = 100;      // ms per character when typing
const eraseSpeed = 50;      // ms per character when deleting
const pauseBetweenWords = 1500; // ms to wait after finishing a word
const pauseBeforeTyping = 500;  // ms to wait before starting next word

// 🔄 State variables
let wordIndex = 0;          // Which word are we on?
let charIndex = 0;          // Which character are we typing/deleting?
let isTyping = true;        // Are we currently typing (true) or erasing (false)?
let timeoutId = null;       // Store setTimeout ID so we can cancel if needed

// ✨ Main function: handles both typing AND erasing
function typeErase() {
  const currentWord = words[wordIndex];
  
  if (isTyping) {
    // ➕ TYPING MODE: Add one character
    typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    
    if (charIndex === currentWord.length) {
      // ✅ Word fully typed!
      isTyping = false; // Switch to erase mode next
      timeoutId = setTimeout(typeErase, pauseBetweenWords); // Wait before erasing
      return;
    }
  } else {
    // ➖ ERASING MODE: Remove one character
    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    
    if (charIndex === 0) {
      // ✅ Word fully erased!
      isTyping = true; // Switch to typing mode next
      wordIndex = (wordIndex + 1) % words.length; // Move to next word (loop back)
      timeoutId = setTimeout(typeErase, pauseBeforeTyping); // Wait before typing new word
      return;
    }
  }
  
  // 🔄 Continue typing/erasing after a short delay
  const speed = isTyping ? typeSpeed : eraseSpeed;
  timeoutId = setTimeout(typeErase, speed);
}

// 👁️ Cursor blink effect (independent of typing)
function blinkCursor() {
  cursor.classList.toggle('visible');
  setTimeout(blinkCursor, 500); // Toggle every 500ms = 1 blink per second
}

// 🚀 Start everything when page loads
window.addEventListener('DOMContentLoaded', () => {
  // Add CSS class for cursor animation (we'll define this in CSS below)
  cursor.classList.add('visible');
  
  // Start the typing loop
  setTimeout(typeErase, pauseBeforeTyping);
  
  // Start cursor blinking
  blinkCursor();
});

// 🧹 Cleanup: Stop animations if user leaves page (good practice)
window.addEventListener('beforeunload', () => {
  if (timeoutId) clearTimeout(timeoutId);
});