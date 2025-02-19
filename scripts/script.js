document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});

var typed = new Typed('#profession', {
    strings: ['Software Engineer', 'Web Developer.'],
    typeSpeed: 80,
});

window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('#about');
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
        aboutSection.classList.add('active');
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
}
