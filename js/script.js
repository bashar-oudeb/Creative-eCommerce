// Get the elements
const menu = document.getElementById('menu')
const close = document.getElementById('close')
const open = document.getElementById('open')
const navLinks = document.getElementsByClassName('navbar-link');

const navToggle = ()=>{
   menu.classList.toggle('active')
}
// Add event listeners to the open and close buttons
open.addEventListener('click', navToggle);
close.addEventListener('click', navToggle);

// Function to remove 'active' class from the menu
const removeActiveClass = () => {
    menu.classList.remove('active');
}

  // Loop through each navigation link and add an event listener
Array.from(navLinks).forEach(link => {
    link.addEventListener('click', removeActiveClass);
});

// header sticky

const header = document.getElementById('header_sticky');
const btnTop = document.getElementById('top_btn');

const headerActive = () => {
    if (window.scrollY > 150) {
        header.classList.add('active');
        btnTop.classList.add('active');
    } else {
        header.classList.remove('active');
        btnTop.classList.remove('active');
    }};

window.addEventListener('scroll', headerActive);

let lastScroll = 0;

const headerSticky = () => {
   window.scrollY > lastScroll ? header.classList.remove('header-hide') : header.classList.add('header-hide');
   lastScroll = window.scrollY;
};

window.addEventListener('scroll', headerSticky);








const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay: 300,
})

sr.reveal(`.alert, .logo, .feature, .blog,  .footer`)
sr.reveal(`.hero , .shop , .offer`, {origin : 'bottom'})
sr.reveal(`.input-wrapper, .navbar, .collection-list `, {origin : 'left', duration:3000, delay: 400})
sr.reveal(`.header-actions, .banner `, {origin : 'right'})




















