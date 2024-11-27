// Smooth scroll to form when CTA button is clicked
function scrollToForm() {
    const form = document.getElementById('contact');
    form.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to your backend
    // For now, we'll just log it to the console
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    
    // Reset form
    event.target.reset();
}

// Add shadow to navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Animate benefit cards on scroll
const benefitCards = document.querySelectorAll('.benefit-card');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
