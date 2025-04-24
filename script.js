'use strict';

// Este script es opcional si ya usas scroll-smooth en Tailwind
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



// Animación de las barras de progreso
window.addEventListener('scroll', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (barPosition < screenPosition) {
        bar.style.width = `${percentage}%`;
      }
    });
  });
