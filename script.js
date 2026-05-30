// ─── SCROLL PROGRESS BAR ───
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const pct = (scrollTop / docHeight) * 100;
  document.getElementById('scrollLine').style.width = pct + '%';
});


// ─── REVEAL ON SCROLL ───
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when they appear
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));


// ─── SMOOTH ACTIVE NAV LINK ───
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--blue)';
    }
  });
});


// ─── TYPING EFFECT (Hero role text) ───
const roleText = '// Frontend Developer';
const roleEl = document.querySelector('.role');
let i = 0;

roleEl.textContent = '';

function typeWriter() {
  if (i < roleText.length) {
    roleEl.textContent += roleText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

// Start typing after a short delay
setTimeout(typeWriter, 600);


// ─── PROJECT CARD TILT EFFECT ───
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform =
      `translate(-5px, -5px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
});


// ─── CONTACT FORM FEEDBACK ───
const formBtn = document.querySelector('.form-submit');

if (formBtn) {
  formBtn.addEventListener('click', () => {
    const name = document.querySelector('.contact-form input[type="text"]');
    const email = document.querySelector('.contact-form input[type="email"]');
    const message = document.querySelector('.contact-form textarea');

    if (!name.value || !email.value || !message.value) {
      formBtn.textContent = 'Fill All Fields!';
      formBtn.style.background = '#cc0000';
      formBtn.style.borderColor = '#cc0000';

      setTimeout(() => {
        formBtn.textContent = 'Send Message →';
        formBtn.style.background = '';
        formBtn.style.borderColor = '';
      }, 2000);
      return;
    }

    formBtn.textContent = 'Sent! ✓';
    formBtn.style.background = 'var(--blue)';
    formBtn.style.borderColor = 'var(--blue)';

    name.value = '';
    email.value = '';
    message.value = '';

    setTimeout(() => {
      formBtn.textContent = 'Send Message →';
      formBtn.style.background = '';
      formBtn.style.borderColor = '';
    }, 3000);
  });
}


// ─── SCROLL PROGRESS LINE (add to HTML if missing) ───
if (!document.querySelector('.scroll-line')) {
  const line = document.createElement('div');
  line.className = 'scroll-line';
  line.id = 'scrollLine';
  document.body.prepend(line);
}