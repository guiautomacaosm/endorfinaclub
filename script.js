// =============================================
// ENDORFINA CLUB — Landing Page JS
// =============================================

// --- NAVBAR SCROLL EFFECT ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// --- SCROLL REVEAL ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Add reveal class to all section children
const revealTargets = document.querySelectorAll(
  '.problem-card, .benefit-card, .testimonial-card, .plan-card, ' +
  '.about-image-wrap, .about-text, .cta-final-text, .cta-shirts, ' +
  '.solution-banner, .hero-stats'
);

revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  revealObserver.observe(el);
});

// --- SMOOTH SCROLL for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// --- PLAN HIGHLIGHT on hover ---
document.querySelectorAll('.plan-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.plan-card').forEach(c => c.style.opacity = '0.7');
    card.style.opacity = '1';
  });
  card.addEventListener('mouseleave', () => {
    document.querySelectorAll('.plan-card').forEach(c => c.style.opacity = '1');
  });
});
