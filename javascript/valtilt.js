let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});


const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    navItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
});