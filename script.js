


// Toogle icon navbar 
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick =()=> {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

// smooth scrool js code 
window.addEventListener('scroll', function() {
  menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelectorAll('header a').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    var target = document.querySelector(anchor.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
  
}); 

   
   
   window.addEventListener('scroll', fadeInServices);

function fadeInServices() {
  var services = document.querySelectorAll('.service');

  for (var i = 0; i < services.length; i++) {
    var service = services[i];
    var servicePosition = service.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (servicePosition < windowHeight - 100) {
      service.classList.add('fade-in');
    }
  }
}

// js typed animation ect 
const type=new Typed('.multiple-text',{

    strings:['Web Developer','WordPress developer','Shopify developer','Graphic Designer','Web Designer', ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});


// scrool reveal  aniamtion
ScrollReveal ({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay:200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


// scroll active links 

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var sections = document.querySelectorAll('section');
  var currentSection = '';

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - header.offsetHeight && pageYOffset < sectionTop + sectionHeight - header.offsetHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  var activeLinks = document.querySelectorAll('nav a');
  activeLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

