'use strict';


//  Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const arrowUp = document.querySelector('.arrowUp__btn');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    //console.log(`navabarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        // Arrow up button active
        arrowUp.classList.add('active');
    } else {
        navbar.classList.remove('navbar--dark');
        // Arrow up button inactive
        arrowUp.classList.remove('active');
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

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    home.style.opacity = 1 - scroll / homeHeight;
})

// Click arrowUp button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})


