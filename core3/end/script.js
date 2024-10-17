// Create the flashlight cursor element
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

// Update the cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Dimming effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Calculate the position and size of the cursor
    const flashLightRadius = 75; // Adjust for size
    const dimmingEffect = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0) ${flashLightRadius}px, rgba(51, 51, 51, 0.9) ${flashLightRadius + 10}px)`;
    
    document.body.style.backgroundImage = dimmingEffect; // Set background gradient
});

// Reset background when mouse leaves
document.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'none';
});
