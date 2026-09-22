(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReduced.matches) return;

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]();=/*+-'.split('');
  const fontSize = 16;

  const attach = (canvas, opts) => {
    const speed = opts && opts.speed || 0.05;
    const ctx = canvas.getContext('2d');
    let cols, drops, letters, lastRow, rafId;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(rect.width / fontSize);
      drops = Array(cols).fill(0).map(() => Math.random() * -20);
      letters = Array(cols).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]);
      lastRow = Array(cols).fill(-999);
      return true;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = 'rgba(0, 33, 71, 0.08)';
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < cols; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const row = Math.floor(drops[i]);

        if (row !== lastRow[i]) {
          letters[i] = chars[Math.floor(Math.random() * chars.length)];
          lastRow[i] = row;
        }
        const ch = letters[i];

        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillText(ch, x, y);
        ctx.fillStyle = 'rgba(241, 90, 34, 0.85)';
        ctx.fillText(ch, x, y - fontSize);

        if (y > rect.height && Math.random() > 0.985) drops[i] = 0;
        drops[i] += speed;
      }
      rafId = requestAnimationFrame(draw);
    };

    if (!resize()) return;
    draw();
    window.addEventListener('resize', () => {
      cancelAnimationFrame(rafId);
      if (resize()) draw();
    });
  };

  const init = () => {
    document.querySelectorAll('.matrix-rain').forEach(canvas => attach(canvas, { speed: 0.05 }));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 0);
  }
})();
