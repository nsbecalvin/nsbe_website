// Example JavaScript to enhance interactivity
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.front-page-section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e0e7ff';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = 'white';
        });
    });
});
