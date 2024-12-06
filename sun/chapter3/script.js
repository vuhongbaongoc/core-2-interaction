const container = document.getElementById('container');

// Words to appear on click
const words = ["Reflection", "Sacrifice", "Flourishing", "Power", "Balance", "Harvest", "Resilience", " Stability", "Fulfillment", "Wisdom"];

// Generate random circles
function createCircles(count) {
    for (let i = 0; i < count; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        // Position circles randomly on the screen
        circle.style.top = `${Math.random() * window.innerHeight}px`;
        circle.style.left = `${Math.random() * window.innerWidth}px`;

        // On click, display a random word
        circle.addEventListener('click', () => {
            const wordElement = document.createElement('div');
            wordElement.classList.add('word');
            wordElement.textContent = words[Math.floor(Math.random() * words.length)];
            wordElement.style.top = circle.style.top;
            wordElement.style.left = circle.style.left;

            container.appendChild(wordElement);

            // Remove word after 2 seconds
            setTimeout(() => {
                wordElement.remove();
            }, 2000);
        });

        container.appendChild(circle);
    }
}

// Generate 30 circles
createCircles(30);

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