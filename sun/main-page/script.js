document.addEventListener("DOMContentLoaded", () => {
    // Create the custom cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    // Move the cursor with the mouse
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effects for titles
    const titles = document.querySelectorAll(".title");
    titles.forEach((title) => {
        title.addEventListener("mouseenter", () => {
            cursor.style.boxShadow =
                "0 0 15px 6px rgba(255, 69, 0, 0.8), 0 0 40px 20px rgba(255, 69, 0, 0.5)";
            cursor.style.transform = "scale(2)";
        });
        title.addEventListener("mouseleave", () => {
            cursor.style.boxShadow =
                "0 0 8px 4px rgba(255, 255, 255, 0.8), 0 0 20px 8px rgba(255, 255, 255, 0.5)";
            cursor.style.transform = "scale(1)";
        });
    });
});

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