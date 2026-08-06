document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Sticky header shadow
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
  updateProgress();
});

// Scroll progress bar
const progressBar = document.getElementById('progressBar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
updateProgress();

// Reveal on scroll — staggered per section so text boxes pop in one after another
const revealEls = document.querySelectorAll('.reveal');
const skillLists = document.querySelectorAll('.skill-list');

document.querySelectorAll('section, .hero').forEach(group => {
  const items = group.querySelectorAll('.reveal');
  items.forEach((el, i) => {
    el.style.transitionDelay = Math.min(i * 100, 500) + 'ms';
  });
});

if (!('IntersectionObserver' in window)) {
  revealEls.forEach(el => el.classList.add('visible'));
  skillLists.forEach(el => el.classList.add('in-view'));
} else {

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.3 });

skillLists.forEach(el => skillObserver.observe(el));

}

// Scroll-spy — highlight the nav link for the section currently in view
const navLinks = Array.from(mainNav.querySelectorAll('a'));
const spySections = ['about', 'experience', 'education', 'skills', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = navLinks.find(a => a.getAttribute('href') === '#' + entry.target.id);
        if (!link) return;
        navLinks.forEach(a => a.classList.remove('nav-active'));
        link.classList.add('nav-active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  spySections.forEach(section => spyObserver.observe(section));
}
