// Select the images, overlay, close button, and expanded text elements
const expandableImages = document.querySelectorAll('.expandable');
const overlay = document.getElementById('dark-overlay');
const closeButton = document.getElementById('close-button');
const expandedText = document.getElementById('expanded-text');

// Add a click event listener to each expandable image
expandableImages.forEach(image => {
    image.addEventListener('click', function() {
        // Add 'expand' class to enlarge the image
        this.classList.add('expand');

        // Set the overlay color, image size, and expanded text dynamically
        const overlayColor = this.getAttribute('data-overlay-color') || 'rgba(0, 0, 0, 0.7)';
        const expandedWidth = this.getAttribute('data-expanded-width') || '800px';
        const expandedHeight = this.getAttribute('data-expanded-height') || 'auto';
        const title = this.getAttribute('data-title') || 'Default Title';
        const description = this.getAttribute('data-description') || ''; // Default to empty if not set

        // Apply the overlay and close button
        overlay.style.display = 'block';
        overlay.style.backgroundColor = overlayColor;
        closeButton.style.display = 'block';

        // Adjust the image size
        this.style.width = expandedWidth;
        this.style.height = expandedHeight;

        // Display the expanded text (title and description)
        expandedText.innerHTML = `${title}<br><br>${description}`; // Display title in bold and description on a new line
        expandedText.style.display = 'block';
    });
});

// Add a click event listener to the close button
closeButton.addEventListener('click', function() {
    // Remove the 'expand' class from all images and reset their styles
    expandableImages.forEach(img => {
        img.classList.remove('expand');  // Remove the expand class
        img.style.width = '';            // Reset the width
        img.style.height = '';           // Reset the height
    });

    // Hide the overlay, close button, and expanded text
    overlay.style.display = 'none';
    closeButton.style.display = 'none';
    expandedText.style.display = 'none';
});

// Also allow the dark overlay to close the expanded image
overlay.addEventListener('click', function() {
    // Remove the 'expand' class from all images and reset their styles
    expandableImages.forEach(img => {
        img.classList.remove('expand');  // Remove the expand class
        img.style.width = '';            // Reset the width
        img.style.height = '';           // Reset the height
    });

    // Hide the overlay, close button, and expanded text
    overlay.style.display = 'none';
    closeButton.style.display = 'none';
    expandedText.style.display = 'none';
});
