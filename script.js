(() => {
  'use strict';

  // ===== Countdown to wedding day =====
  const WEDDING = new Date('2026-07-31T18:30:00+02:00'); // Madrid summer time

  const grid = document.getElementById('countdown');
  if (grid) {
    const units = {
      days: grid.querySelector('[data-unit="days"]'),
      hours: grid.querySelector('[data-unit="hours"]'),
      minutes: grid.querySelector('[data-unit="minutes"]'),
      seconds: grid.querySelector('[data-unit="seconds"]'),
    };

    const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

    const tick = () => {
      const diff = WEDDING.getTime() - Date.now();

      if (diff <= 0) {
        units.days.textContent = '00';
        units.hours.textContent = '00';
        units.minutes.textContent = '00';
        units.seconds.textContent = '00';
        const title = document.querySelector('.countdown__title');
        if (title) title.textContent = '¡Hoy es el gran día!';
        return false;
      }

      const sec = Math.floor(diff / 1000);
      const days = Math.floor(sec / 86400);
      const hours = Math.floor((sec % 86400) / 3600);
      const minutes = Math.floor((sec % 3600) / 60);
      const seconds = sec % 60;

      units.days.textContent = pad(days);
      units.hours.textContent = pad(hours);
      units.minutes.textContent = pad(minutes);
      units.seconds.textContent = pad(seconds);
      return true;
    };

    if (tick()) setInterval(tick, 1000);
  }

  // ===== Reveal on scroll =====
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ===== Smooth in-page navigation with offset =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  // ===== Subtle parallax on hero decorations =====
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = null;
    window.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        heroBg.style.transform = `translateY(${y * 0.15}px)`;
        raf = null;
      });
    }, { passive: true });
  }
})();
