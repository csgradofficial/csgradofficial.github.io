(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const reveal = () => {
    const cards = document.querySelectorAll('.officer-card');
    if (!cards.length) return;

    if (prefersReduced.matches || !('IntersectionObserver' in window)) {
      cards.forEach(c => c.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      // Stagger cards in each visible batch
      const visible = entries.filter(e => e.isIntersecting);
      visible.forEach((entry, i) => {
        const el = entry.target;
        setTimeout(() => el.classList.add('in-view'), i * 90);
        obs.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    cards.forEach(c => observer.observe(c));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal);
  } else {
    reveal();
  }
})();
