document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
        let nav = document.getElementById('main-nav');
        nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image Slideshow Function
    function slideshow(sectionId) {
        const slideshow = document.querySelector(`#${sectionId} .image-slideshow`);
        if (slideshow) { // Check if slideshow exists
            const images = slideshow.querySelectorAll('img');
            if (images.length > 0) { // Check if there are images
                let currentIndex = 0;
                setInterval(() => {
                    images.forEach(img => img.classList.remove('active'));
                    images[currentIndex].classList.add('active');
                    currentIndex = (currentIndex + 1) % images.length;
                }, 3000);
            }
        }
    }

    // Start Slideshows (with error handling)
    slideshow('market');
    slideshow('genset');
    slideshow('smart');
    slideshow('improvement');
    slideshow('facility');
});
