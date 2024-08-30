// script.js

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll for Anchor Links
const smoothScrollLinks = document.querySelectorAll('nav ul li a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Background Circle Animation
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        setInterval(() => {
            const x = Math.floor(Math.random() * 100) - 50;
            const y = Math.floor(Math.random() * 100) - 50;
            const scale = Math.random() * 0.5 + 1;
            circle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        }, 5000);
    });
});

// Toggle Mobile Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Scroll Reveal Animations
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
