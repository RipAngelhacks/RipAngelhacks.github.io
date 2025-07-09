// This script uses the Intersection Observer API to add a fade-in effect
// to elements as they scroll into view. It's a modern and performant
// way to handle scroll-based animations.

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the 'hidden' class to trigger the CSS transition
                entry.target.classList.remove('hidden');
                // Stop observing the element so the animation doesn't re-trigger
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Optional: start the animation when the element is 10% in view
        threshold: 0.1 
    });

    // Find all elements with the 'hidden' class and start observing them
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});
