// Select the circle and title elements
const circle = document.querySelector('.circle');
const title = document.querySelector('.title');

// Add a click event listener to the circle
circle.addEventListener('click', () => {
  // Expand the circle
  circle.classList.add('expand');

  // Show the title after a delay (e.g., 1 second)
  setTimeout(() => {
    title.classList.add('show');
  }, 1000); // 1000 ms = 1 second
});

