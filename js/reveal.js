(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const run = () => {
    const targets = document.querySelectorAll('.reveal, .reveal-group');
    if (!targets.length) return;

    const showNow = el => {
      if (el.classList.contains('reveal-group')) {
        el.querySelectorAll(':scope > *').forEach(c => c.classList.add('in-view'));
      } else {
        el.classList.add('in-view');
      }
    };

    if (prefersReduced.matches || !('IntersectionObserver' in window)) {
      targets.forEach(showNow);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.classList.contains('reveal-group')) {
          el.querySelectorAll(':scope > *').forEach((child, i) => {
            setTimeout(() => child.classList.add('in-view'), i * 100);
          });
        } else {
          el.classList.add('in-view');
        }
        obs.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(el => observer.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
