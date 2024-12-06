// Get the container
const ballContainer = document.querySelector('.ball-container');

// Function to generate a random integer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a ball
function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');

  // Randomize position and animation duration
  const size = getRandomInt(10, 40); // Random size
  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;

  ball.style.top = `${getRandomInt(0, window.innerHeight - size)}px`;
  ball.style.left = `${getRandomInt(0, window.innerWidth - size)}px`;

  // Random animation durations
  ball.style.animationDuration = `${getRandomInt(3, 8)}s, ${getRandomInt(5, 12)}s`;

  // Append the ball to the container
  ballContainer.appendChild(ball);

  // Remove the ball after its animation ends
  setTimeout(() => ball.remove(), 12000); // Adjust time based on animation duration
}

// Generate multiple balls
function generateBalls() {
  for (let i = 0; i < 10; i++) { // Adjust the number of balls
    createBall();
  }
}

// Periodically add new balls
setInterval(generateBalls, 3000); // Add new balls every 3 seconds
// Initial ball generation
generateBalls();


// Select the hamburger menu and dropdown
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown');

// Toggle dropdown visibility
hamburgerMenu.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

// Add event listener to toggle dropdown visibility
hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
  });