window.addEventListener('scroll', () => {
    const navContainer = document.querySelector('.nav-container');

    if (window.scrollY > 10) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
});