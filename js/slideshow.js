(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const setup = (root) => {
    const slides = Array.from(root.querySelectorAll('.slide'));
    if (slides.length < 2) return;

    const stage = root.querySelector('.slideshow-stage');
    const dotsWrap = root.querySelector('.slideshow-dots');
    const thumbsWrap = root.querySelector('.slideshow-thumbs');
    const prevBtn = root.querySelector('.slideshow-arrow-prev');
    const nextBtn = root.querySelector('.slideshow-arrow-next');

    const autoplayMs = parseInt(root.dataset.autoplay || '5000', 10);
    let current = 0;
    let timer = null;
    let paused = false;

    // Build dot + thumb controls from slides
    slides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slideshow-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);

      const thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'slideshow-thumb' + (i === 0 ? ' is-active' : '');
      thumb.setAttribute('role', 'tab');
      thumb.setAttribute('aria-label', `Thumbnail ${i + 1}`);
      thumb.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      const timg = document.createElement('img');
      timg.src = slide.src;
      timg.alt = '';
      timg.loading = 'lazy';
      timg.decoding = 'async';
      thumb.appendChild(timg);
      thumb.addEventListener('click', () => go(i));
      thumbsWrap.appendChild(thumb);
    });

    const dots = Array.from(dotsWrap.children);
    const thumbs = Array.from(thumbsWrap.children);

    const go = (i) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle('is-active', idx === current));
      dots.forEach((d, idx) => {
        d.classList.toggle('is-active', idx === current);
        d.setAttribute('aria-selected', idx === current ? 'true' : 'false');
      });
      thumbs.forEach((t, idx) => {
        t.classList.toggle('is-active', idx === current);
        t.setAttribute('aria-selected', idx === current ? 'true' : 'false');
      });
      restartTimer();
    };

    const next = () => go(current + 1);
    const prev = () => go(current - 1);

    const restartTimer = () => {
      stopTimer();
      if (paused || prefersReduced.matches) return;
      timer = window.setTimeout(next, autoplayMs);
    };
    const stopTimer = () => {
      if (timer) { clearTimeout(timer); timer = null; }
    };

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    // Pause on hover
    stage.addEventListener('mouseenter', () => { paused = true; stopTimer(); });
    stage.addEventListener('mouseleave', () => { paused = false; restartTimer(); });

    // Pause when tab hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopTimer(); else restartTimer();
    });

    // Keyboard arrows when stage is focused
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    });

    restartTimer();
  };

  const init = () => {
    document.querySelectorAll('.slideshow').forEach(setup);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
