let slideIndex = 0;
      
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 0.5 seconds (adjust as needed)
}

// Start the slideshow when the page loads
window.onload = showSlides;

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