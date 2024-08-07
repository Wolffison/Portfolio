document.addEventListener('DOMContentLoaded', () => {
    createShootingStars(50);

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
});

function createShootingStars(count) {
    const body = document.body;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        body.appendChild(star);
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

