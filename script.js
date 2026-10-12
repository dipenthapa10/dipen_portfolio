document.documentElement.classList.add('js');

window.addEventListener('scroll', () => {
    const navContainer = document.querySelector('.nav-container');

    if (window.scrollY > 10) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card.scroll-reveal, .edu-entry.scroll-reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionSections = document.querySelectorAll('#about, #education, #experience, #projects, #leadership, #contact');

    motionSections.forEach((section) => {
        section.firstElementChild?.classList.add('section-motion-content');
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
        cards.forEach((card) => card.classList.add('is-visible'));
        motionSections.forEach((section) => section.classList.add('section-motion-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: .16 });

    cards.forEach((card) => observer.observe(card));

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-motion-visible');
            } else {
                entry.target.classList.remove('section-motion-visible');
            }
        });
    }, { threshold: .01, rootMargin: '0px 0px -18% 0px' });

    motionSections.forEach((section) => sectionObserver.observe(section));
});
