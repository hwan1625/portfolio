'use strict';


//  Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const arrowUp = document.querySelector('.arrowUp__btn');
const toggleBtnResize = document.querySelector('.navbar__toggle-btn');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    //console.log(`navabarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        // Arrow up button active
        arrowUp.classList.add('active');
        toggleBtnResize.classList.add('resize');
    } else {
        navbar.classList.remove('navbar--dark');
        // Arrow up button inactive
        arrowUp.classList.remove('active');
        toggleBtnResize.classList.remove('resize');
    }
});

// Click navbar toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarMenu.firstElementChild.classList.toggle('active');
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const menu_items = document.querySelectorAll('.navbar__menu__item');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    //console.log(event.target.dataset.link);
    scrollIntoView(link);

    // navbar 카테고리 클릭 시 active 클래스 전환
    menu_items.forEach((item) => {
        if(item.classList.value === 'navbar__menu__item active') {
            item.classList.remove('active');
        }
    })
    event.target.classList.add('active');
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

// Filtering work categories
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
const categories = document.querySelectorAll('.category__btn');
workBtnContainer.addEventListener('click', (e) => {
    // 카테고리 클릭 시 active 클래스 전환
    console.log(e.target.classList.value);
    if(e.target.classList.value === 'category__btn active') {
        return;
    } else {
        categories.forEach((category) => {
            if(category.classList.value === 'category__btn active') {
                category.classList.remove('active');
            } 
        })
        if(e.target.classList.value === 'category__count') {
            e.target.parentNode.classList.add('active');
        } else {
            e.target.classList.add('active');
        }
        
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if(filter == null) {
            return;
        }
        projectContainer.classList.add('anim-out');
        setTimeout(() => {
            projects.forEach((project) => {
                //console.log(project.dataset.type);
                if(filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                } else {
                    project.classList.add('invisible');
                }
            });
            projectContainer.classList.remove('anim-out');
        }, 300)
    }
})





