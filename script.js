// ===========================
//  NAVBAR SCROLL + HAMBURGER
// ===========================
const header    = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

// Chiudi menu su click voce nav (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  });
});

// ===========================
//  FORM SUBMIT (simulato)
// ===========================
function handleSubmit() {
  const nome     = document.getElementById('nome').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const btn      = document.getElementById('submit-btn');
  const success  = document.getElementById('form-success');

  if (!nome || !telefono) {
    alert('Per favore compila i campi obbligatori (Nome e Telefono).');
    return;
  }

  btn.disabled    = true;
  btn.textContent = 'Invio in corso...';

  // Simula invio
  setTimeout(() => {
    btn.style.display = 'none';
    success.classList.remove('hidden');
    // Reset form
    ['nome','telefono','email','servizio','messaggio'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }, 1000);
}

// ===========================
//  SCROLL REVEAL (leggero)
// ===========================
const revealEls = document.querySelectorAll(
  '.servizio-card, .target-card, .recensione-card, .contatto-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(22px)';
  el.style.transition = `opacity 0.45s ease ${i * 0.06}s, transform 0.45s ease ${i * 0.06}s`;
  observer.observe(el);
});

// ===========================
//  SMOOTH SCROLL per ancore
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = header.offsetHeight + 8;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
