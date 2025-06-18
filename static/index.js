const animatedElements = document.querySelectorAll(".fade-in .animate");

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop observing once animated
        }
    });
}, options);

// Observe each animated element individually
animatedElements.forEach(el => observer.observe(el));

function toggleMobileDropdown(button){
    const targetDiv = document.querySelector('#mobileDropDown');
    const classToToggle = 'block-header-layout-mobile__dropdown--open';
    const buttonClassToToggle = 'burger--open';

    if (targetDiv){
        targetDiv.classList.toggle(classToToggle);
    }

    button.classList.toggle(buttonClassToToggle);

}