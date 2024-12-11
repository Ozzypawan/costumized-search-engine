document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.gsc-search-button');
    const searchInput = document.querySelector('.gsc-input');
    
    // Search Button Click Event
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== "") {
            alert("Searching for: " + searchInput.value);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Optional: If you want to trigger the search on "Enter" key press
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== "") {
            alert("Searching for: " + searchInput.value);
        } else if (e.key === 'Enter') {
            alert("Please enter a search term.");
        }
    });

    // Optional: Add hover effect dynamically with JS for testimonials or other elements
    const testimonialCards = document.querySelectorAll('.testimonial');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Example: Dynamic Addition of a New Testimonial (could be extended)
    // const addTestimonialButton = document.createElement('button');
    // addTestimonialButton.textContent = "Add Testimonial";
    addTestimonialButton.style.marginTop = "20px";
    addTestimonialButton.style.padding = "10px 20px";
    addTestimonialButton.style.backgroundColor = "#1a73e8";
    addTestimonialButton.style.color = "#C3D1EC";
    addTestimonialButton.style.border = "none";
    addTestimonialButton.style.borderRadius = "5px";
    addTestimonialButton.style.cursor = "pointer";
    document.getElementById('testimonials').appendChild(addTestimonialButton);

    addTestimonialButton.addEventListener('click', () => {
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('testimonial');
        newTestimonial.innerHTML = `<p>"Great experience!"</p><span>- New User</span>`;
        document.querySelector('.testimonial-slider').appendChild(newTestimonial);
    });
});
