/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});

/*SCROLL testimonial*/
sr.reveal('.carousel', {interval: 200});

/*SCROLL prices*/
sr.reveal('.costs', {interval: 200});

/*SCROLL contact*/
sr.reveal('.contact-me', {interval: 200});


/*Typer*/

const texts = ["with grammar", "to speak Spanish"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
if (count === texts.length){
count = 0;
}
currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;
if(letter.length === currentText.length){
count++;
index = 0;
}
setTimeout(type, 370);


}());
