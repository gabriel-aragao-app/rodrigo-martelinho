import initServices from './modules/showcase/services.js';
import initOrigins from './modules/identity/origins.js';
import initGallery from './modules/showcase/gallery.js';
import initTestimonials from './modules/socialProof/testimonials.js';
import initContactForm from './modules/conversion/contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Prestige Dent Repair - App Started');

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-brand-black', 'shadow-lg', 'py-2');
            header.classList.remove('bg-transparent', 'py-4');
        } else {
            header.classList.remove('bg-brand-black', 'shadow-lg', 'py-2');
            header.classList.add('bg-transparent', 'py-4');
        }
    });

    // Initialize modules
    initServices();
    initOrigins();
    initGallery();
    initTestimonials();
    initContactForm();
});
