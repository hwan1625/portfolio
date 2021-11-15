'use strict';


//  Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    //console.log(`navabarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    //console.log(event.target.dataset.link);
    scrollIntoView(link);
})

// Click 'Contact Me' button
const contactMeButton = document.querySelector('.home__contact');
contactMeButton.addEventListener('click', () => {
    scrollIntoView('#contact');
})

function scrollIntoView(selector) {
    document.querySelector(selector).scrollIntoView({behavior : 'smooth'});
}