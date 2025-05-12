document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('animatedBox');
  const button = document.getElementById('animateBtn');

  // Check localStorage to see if animation has been played
  const hasAnimated = localStorage.getItem('hasAnimated');

  if (hasAnimated) {
    // If animation has already played, show box without animation
    box.classList.add('fade-in');
  }

  button.addEventListener('click', () => {
    if (!hasAnimated) {
      box.classList.add('fade-in');
      localStorage.setItem('hasAnimated', 'true');
    }
  });
});
const button = document.querySelector('.button');
button.addEventListener('click', () => {
  button.classList.toggle('active');
});

// Saving Data
localStorage.setItem('theme', 'dark');

box.classList.remove('fade-in');
void box.offsetWidth; // Trigger reflow
box.classList.add('fade-in');
