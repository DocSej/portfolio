// Animate About section on scroll
const slideInElements = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', () => {
  slideInElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Animate skill bars on scroll
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('#skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if(sectionTop < windowHeight - 100) {
    skillFills.forEach(fill => {
      fill.style.width = fill.style.width || fill.getAttribute('style').replace('width:','');
    });
  }
});
