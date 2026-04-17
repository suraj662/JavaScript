// scroll.js

// Cache DOM elements for performance
const progress = document.querySelector('.progress');

// Function to calculate and update scroll progress
function updateScrollProgress() {
  // Total scrollable height = full document height - viewport height
  const scrollableHeight = 
    document.documentElement.scrollHeight - window.innerHeight;
  
  // How far the user has scrolled from the top
  const scrolled = window.scrollY;
  
  // Calculate percentage (with safety check for division by zero)
  const percent = scrollableHeight > 0 
    ? (scrolled / scrollableHeight) * 100 
    : 0;
  
  // Update the progress bar width
  progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}

// Option 1: Simple scroll listener (works fine for most cases)
window.addEventListener('scroll', updateScrollProgress);

// Option 2: Optimized with requestAnimationFrame (better for heavy pages)
// Uncomment below and comment out the simple listener above if needed:
/*
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollProgress();
      ticking = false;
    });
    ticking = true;
  }
});
*/

// Initialize on page load (in case page loads mid-scroll via back button)
window.addEventListener('load', updateScrollProgress);
window.addEventListener('resize', updateScrollProgress);