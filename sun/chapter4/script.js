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