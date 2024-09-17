// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Card Hover Effects
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('mouseover', () => {
        category.style.transform = 'translateY(-5px)';
        category.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    category.addEventListener('mouseout', () => {
        category.style.transform = 'translateY(0)';
        category.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
});

// Basic Carousel Functionality (If you have a carousel)
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}