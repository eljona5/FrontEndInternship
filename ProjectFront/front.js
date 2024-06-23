$(document).ready(function() {
    new Glide('.glide', {
        type: 'carousel',   // Type of glide animation (carousel)
        perView: 1,         // Number of slides to show per view
        focusAt: 'center',  // Center slide when gliding
        gap: 20,            // Gap between slides
        autoplay: 3000,     // Autoplay interval in milliseconds
        hoverpause: true,   // Pause autoplay on hover
        keyboard: true,     // Enable keyboard navigation
        breakpoints: {
            768: {
                perView: 2   // Number of slides to show at 768px and above viewport width
            }
        }
    }).mount();
});
