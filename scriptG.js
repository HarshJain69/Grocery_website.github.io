// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Add event listeners for hover and click
galleryItems.forEach(item => {
    // Hover effect (example - you can customize this)
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)'; // Enlarge slightly
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Add a subtle shadow
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)'; // Reset to original size
        item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Reset to original shadow
    });

    // Click interaction
    item.addEventListener('click', () => {
        const itemName = item.querySelector('.item-name').textContent;
        const itemPrice = item.querySelector('.item-price').textContent;
        alert(`You clicked on ${itemName}! Price: ${itemPrice}`); 
        // You can replace the alert with more complex logic like adding to cart, etc.
    });
});