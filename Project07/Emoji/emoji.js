// emoji.js - Random Emoji on Hover ✨

// 1️⃣ STEP: Get the emoji element from HTML
const emojiElement = document.querySelector('#emoji');

// 2️⃣ STEP: List of emojis to choose from
const emojis = [
  '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂', '😊', '😗',
  '😛', '😏', '🤥', '😴', '🥺', '😧', '😇', '😳', '🙃', '🥴',
  '🧐', '🤨', '😒', '🤔', '🤭', '🥰', '🤐', '👀', '🤔', '🤪',
  '🥲', '😃', '😁', '😬',
];

// 3️⃣ STEP: Function to get a random emoji from the list
function getRandomEmoji() {
  // Math.random() gives 0 to 0.999...
  // Multiply by emojis.length to get 0 to (length-1).999...
  // Math.floor() rounds down to whole number = valid array index
  const randomIndex = Math.floor(Math.random() * emojis.length);
  
  // Return the emoji at that random position
  return emojis[randomIndex];
}

// 4️⃣ STEP: When mouse HOVERS over emoji, change to new random emoji
emojiElement.addEventListener('mouseenter', function() {
  // Get a random emoji
  const newEmoji = getRandomEmoji();
  
  // Update the text inside the div
  emojiElement.textContent = newEmoji;
  
  // Optional: Log to console for debugging
  console.log('New emoji:', newEmoji);
});

// 5️⃣ STEP: When mouse LEAVES, emoji turns grayscale (handled by CSS ✅)
// We don't need JS for this - CSS :hover does it automatically!

// 🎁 BONUS: Add click to copy emoji to clipboard (extra fun!)
emojiElement.addEventListener('click', function() {
  const currentEmoji = emojiElement.textContent;
  
  // Copy to clipboard
  navigator.clipboard.writeText(currentEmoji)
    .then(() => {
      console.log('Copied:', currentEmoji);
      // Optional: Show quick feedback
      emojiElement.style.transform = 'scale(1.5)';
      setTimeout(() => {
        emojiElement.style.transform = 'scale(1)';
      }, 150);
    })
    .catch(err => {
      console.error('Copy failed:', err);
    });
});