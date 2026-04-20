// circle.js - Simple Custom Cursor for Beginners ✨

// 1️⃣ STEP: Get the cursor element from HTML
const cursor = document.querySelector('.cursor');

// 2️⃣ STEP: Make a list of colors we want to use
const colors = [
  '#FF6633', // Orange
  '#FFB399', // Peach
  '#FF33FF', // Pink
  '#FFFF99', // Yellow
  '#00B3E6', // Blue
  '#E6B333', // Gold
  '#3366E6', // Navy
  '#999966', // Olive
  '#99FF99', // Green
  '#B34D4D', // Red
];

// 3️⃣ STEP: When mouse moves, run the moveCursor function
document.addEventListener('mousemove', function(event) {
  moveCursor(event.clientX, event.clientY);
});

// 4️⃣ STEP: Function to move cursor and change color
function moveCursor(x, y) {
  // Move cursor to mouse position
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
  
  // Pick a random color from our list
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  
  // Apply the color to cursor
  cursor.style.backgroundColor = randomColor;
}

// 5️⃣ STEP: When user clicks, make cursor bigger temporarily
document.addEventListener('click', function() {
  // Make cursor bigger
  cursor.style.transform = 'translate(-50%, -50%) scale(2)';
  
  // After 100ms, make it normal again
  setTimeout(function() {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 100);
});

// 6️⃣ STEP: When mouse hovers over button, make cursor bigger
const button = document.querySelector('button');

button.addEventListener('mouseenter', function() {
  cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
  cursor.style.backgroundColor = '#ffffff'; // White on hover
});

button.addEventListener('mouseleave', function() {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  // Don't reset color here - let moveCursor handle it
});

// 7️⃣ STEP: Hide custom cursor on mobile (optional but recommended)
// Check if device has touch screen
if ('ontouchstart' in window) {
  cursor.style.display = 'none';
}