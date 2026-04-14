document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Menu Logic --- */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = menuBtn.querySelector('i');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    /* --- Scroll Interactions & Animations --- */
    const navbar = document.getElementById('navbar');
    const reveals = document.querySelectorAll('.reveal');

    // Reveal elements on scroll using IntersectionObserver for high performance
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before it hits the bottom
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after revealing to only load once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(el => {
        revealObserver.observe(el);
    });

    // Nav Bar subtle styling on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.firstElementChild.classList.add('nav-scrolled');
        } else {
            navbar.firstElementChild.classList.remove('nav-scrolled');
        }
    });
});
