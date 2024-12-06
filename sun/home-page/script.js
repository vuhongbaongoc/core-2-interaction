  // Get the custom cursor element
  const cursor = document.getElementById('cursor');

  // Update cursor position based on mouse movement
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });

  // Redirect to the next page on click
  document.addEventListener('click', () => {
      window.location.href = '../main-page/index.html'; // Replace with the desired URL
  });


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
