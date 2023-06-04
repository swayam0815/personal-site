// Wait for the document to load
window.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshow-container');
    const slides = slideshowContainer.getElementsByClassName('slide');
    const totalSlides = slides.length;

    let currentSlideIndex = 0;

    // Listen for scroll events
    window.addEventListener('onscroll', (event) => {
        // Increase or decrease the current slide index based on scroll direction
        currentSlideIndex += event.deltaY > 0 ? 1 : -1;

        // Ensure the current slide index stays within the valid range
        currentSlideIndex = Math.max(0, Math.min(currentSlideIndex, totalSlides - 1));

        // Scroll to the current slide
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth' });

        // Prevent default scroll behavior
        event.preventDefault();
    });
});