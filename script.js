// GSAP animations
gsap.from(".hero-text h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".hero-text h2", { duration: 1.2, y: -30, opacity: 0, delay: 0.5 });
gsap.from(".hero-text p", { duration: 1.2, x: -100, opacity: 0, delay: 1 });
gsap.from(".hero-img img", { duration: 1.5, scale: 0, opacity: 0, delay: 1.2, ease: "back" });
gsap.from(".btn", { duration: 1, y: 50, opacity: 0, delay: 1.5 });

function myFunction(x){
  x.classList.toggle("change")
}

// VanillaTilt initialization
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});


// JavaScript to toggle the mobile menu on and off
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');



hamburgerBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
});

mobileMenu.addEventListener('click', function(event) {
  event.stopPropagation();
})

/*document.addEventListener('click', function() {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display= 'none';
  }
});*/

/* light mode and dark mode*/
/*const about = document.getElementById("about")
const herop = document.getElementById("herop")
const htxth1 = document.getElementsById("htxth1");
const hero = document.getElementById("hero");*/
/*const toggleImage = document.getElementById("toggleImage");
    let isSun = true;

    toggleImage.addEventListener("click", () => {
      if (isSun) {
        toggleImage.src = "sun.png"; // Sun icon
        hero.style.background = "linear-gradient(330deg, #0c6666be, black, black, #4d390e);";
        /*htxth1.style.color = "rgb(165, 194, 238)";
        herop.style.color = "white";
        about.style.background = "rgb(28, 28, 28)";
        /*aboutp.style.color = "";
        abouth2.style.color = "";
        projects.style.background = "";
        projects.style.borderTop = "";
        contact.style.background = "";
        contacth2.style.color = "";
        contactp.style.color = "";*/


        /*toggleImage.src = "moon.png"; // Moon icon
        hero.style.background = "linear-gradient(330deg, orange, white, rgba(29,123,136,1)";
        /*htxth1.style.color = "black";
        herop.style.color = "black";
        about.style.background = "rgb(150, 170, 200)";
        about.style.borderTop = "2px solid black";
        /*aboutp.style.color = "black";
        abouth2.style.color = "rgb(0, 105, 255)";
        projects.style.background = "rgb(150, 170, 255)";
        projects.style.borderTop = "2px solid black";
        contact.style.background = "rgb(150, 170, 200)";
        contacth2.style.color = "rgb(0, 105, 255)";
        contactp.style.color = "black";
        isSun = false;
      }
      
      /*else {
        toggleImage.src = "sun.png"; // Sun icon 
        hero.style.background = "linear-gradient(330deg, #0c6666be, black, #4d390e)";
        /*isSun = true;
        hero.style.background = "linear-gradient(330deg, #0c6666be, black, black, #4d390e);";*/
        /*htxth1.style.color = "rgb(165, 194, 238)";
        herop.style.color = "white";
        about.style.background = "rgb(28, 28, 28)";
        /*herop.style.color = "";
        about.style.background = "";
        aboutp.style.color = "";
        abouth2.style.color = "";
        projects.style.background = "";
        projects.style.borderTop = "";
        contact.style.background = "";
        contacth2.style.color = "";
        contactp.style.color = "";
        isSun = false;
      }
    });


const hero = document.getElementById('hero')
const toggleImage = document.getElementById('toggleImage');
let isSun = true;

  /*toggleImage.addEventListener('click', () => {
    if (isSun) {
      toggleImage.src = "moon.png";
      hero.style.background = "linear-gradient(30deg, blue, white, rgba(29,123,136,1)"
    } else {
      toggleImage.src = "sun.png";
      hero.style.background = "linear-gradient(330deg, #0c6666be, black, black, #4d390e)";
    }
  });


  toggleImage.addEventListener('click', () => {
    if (toggleImage.src = "sun.png") {
        toggleImage.src = "moon.png"
      } else if (toggleImage.src = "moon.png") {
      toggleImage.src = "sun.png"
      }
  })




let isDarkmode = false;

function toggleTheme() {
  const toggle = document.getElementById('toggleImage');
  const hero = document.getElementById('hero');

  isDarkmode = !isDarkmode;

  if (isDarkmode) {
    hero.classList.add('light-mode');
    toggle.src = 'moon.png';
  }
  else{
    hero.classList.remove('light-mode');
    toggle.src = 'sun.png';
  }
}*/



const hero = document.getElementById('hero')
const toggleImage = document.getElementById('toggleImage');

toggleImage.addEventListener('click', () => {
  hero.classList.toggle('light-mode');
  htxth1.classList.toggle('lightt-mode');
  herop.classList.toggle('lightt-mode');
  about.classList.toggle('lighttt-mode');
  aboutp.classList.toggle('lightttt-mode');
  abouth2.classList.toggle('ligh-mode');
  projects.classList.toggle('lig-mode');
  contact.classList.toggle('lighttt-mode');
  contactp.classList.toggle('lightttt-mode');
  contactpp.classList.toggle('lightttt-mode');
  contacth2.classList.toggle('ligh-mode');
  contacta.classList.toggle('ligh-mode');
  mobileMenu.classList.toggle('light-modeee');




  if (hero.classList.contains('light-mode'))
  {
    toggleImage.src = 'moon.png';
  }
  else {
    toggleImage.src = 'sun.png';
  }
});