// A fixed, sparse sky: independent star positions, gentle parallax, no tiled pattern.
function initializeNightSky() {
  const canvas = document.querySelector('.night-sky');
  if (!canvas || canvas.dataset.ready) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  canvas.dataset.ready = 'true';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let seed = 87241;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const stars = Array.from({ length: 155 }, () => ({
    x: random(), y: random(), radius: .35 + random() * .75,
    alpha: .12 + random() ** 2 * .38, depth: .35 + random() * .65,
  }));
  // Clear the complete text/card areas, not just paint stars below the glyphs.
  const textAreas = [...document.querySelectorAll(
    '.hero-copy, .portrait-frame, .site-header, .about-copy, .profile-card, '
    + '.work-card, .experience-card, .education-card, h2, h3, p, nav, footer'
  )];
  let frame = 0, last = 0, drift = 0, width = 0, height = 0;
  function render(now) {
    frame = 0;
    if (document.hidden) { last = 0; return; }
    if (!reduced.matches && last && now - last < 32) {
      frame = requestAnimationFrame(render); return;
    }
    if (!reduced.matches && last) drift += Math.min(now - last, 80) * .0007;
    last = now;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    if (width !== innerWidth || height !== innerHeight) {
      width = innerWidth; height = innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const count = Math.min(stars.length, Math.round(width * height / 6200));
    const offset = reduced.matches ? 0 : scrollY * .045;
    for (const star of stars.slice(0, count)) {
      const span = height + 40;
      const y = ((star.y * span - (offset + drift) * star.depth) % span + span) % span - 20;
      context.beginPath();
      context.arc(star.x * width, y, star.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(192,213,242,${star.alpha})`;
      context.fill();
    }
    for (const element of textAreas) {
      const rect = element.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > height) continue;
      context.clearRect(rect.left - 14, rect.top - 10, rect.width + 28, rect.height + 20);
    }
    if (!reduced.matches) frame = requestAnimationFrame(render);
  }
  function refresh() {
    if (!frame) frame = requestAnimationFrame(render);
  }
  addEventListener('resize', refresh, { passive: true });
  addEventListener('scroll', refresh, { passive: true });
  document.addEventListener('visibilitychange', () => { last = 0; refresh(); });
  reduced.addEventListener('change', () => { last = 0; refresh(); });
  // Language changes and reveal transitions also update the no-star regions.
  new MutationObserver(refresh).observe(document.querySelector('main') || document.body,
    { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
  document.fonts?.ready.then(refresh);
  refresh();
}
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeNightSky, { once: true });
  else initializeNightSky();
}
