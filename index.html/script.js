// JavaScript for Best Friend Girl Website

// Show greeting alert on page load
window.addEventListener('load', () => {
    alert("Welcome to the website dedicated to my best friend!");
});

// Modal/lightbox for photos
const photos = document.querySelectorAll('.photos img');
const body = document.body;

// Create modal elements
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.visibility = 'hidden';
modal.style.opacity = '0';
modal.style.transition = 'opacity 0.3s ease';
modal.style.zIndex = '1000';

const modalImg = document.createElement('img');
modalImg.style.maxWidth = '90%';
modalImg.style.maxHeight = '90%';
modalImg.style.borderRadius = '15px';
modal.appendChild(modalImg);

body.appendChild(modal);

// Show modal on photo click
photos.forEach(photo => {
    photo.style.cursor = 'pointer';
    photo.addEventListener('click', () => {
        modalImg.src = photo.src;
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        body.style.overflow = 'hidden'; // Prevent background scroll
    });
});

// Hide modal on click outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.visibility = 'hidden';
            body.style.overflow = 'auto';
        }, 300);
    }
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑ Top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '16px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.backgroundColor = '#ffb6c1';
scrollBtn.style.color = '#4a2c3a';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1001';

body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
