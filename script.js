// Initialize Lucide Icons
lucide.createIcons();

// Typing Animation
new Typed('#typed', {
    strings: ['ICT Engineer', 'IT Executive', 'Data Automation Specialist', 'Tech Educator'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-opacity', 'duration-1000', 'opacity-0');
    observer.observe(section);
});