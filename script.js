(() => {
  'use strict';

  const menuButton = document.querySelector('.menu');
  const navigation = document.querySelector('#site-nav');
  const progress = document.querySelector('.progress');
  const year = document.querySelector('#year');

  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile navigation
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menuButton.textContent = isOpen ? '✕' : '☰';
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        menuButton.textContent = '☰';
      });
    });
  }

  // Scroll progress indicator
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const amount = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, amount))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Reveal elements as they enter the viewport, with a graceful fallback.
  const revealElements = document.querySelectorAll('.reveal:not(.visible)');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }

  // Project filters
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project[data-category]');

  function setProjectFilter(filter) {
    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    projectCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => setProjectFilter(button.dataset.filter));
  });

  // The three focus cards lead to the corresponding project filter.
  document.querySelectorAll('[data-filter-target]').forEach((card) => {
    const activate = () => {
      setProjectFilter(card.dataset.filterTarget);
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    card.addEventListener('click', activate);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });
})();
