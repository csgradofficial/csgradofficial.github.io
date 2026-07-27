const NAV_HTML = `
<nav class="navbar">
  <div class="nav-container">
    <a href="/index.html" class="nav-logo">
      <img src="/logos/csgradlogo.jpeg" alt="CSGRAD Logo" />
    </a>
    <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
    <ul class="nav-links">
      <li><a href="/about.html">About</a></li>
      <li><a href="/officers.html">Officers</a></li>
      <li><a href="/faq.html">FAQ</a></li>
      <li><a href="/resources.html">Resources</a></li>
    </ul>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-container">
    <img src="/logos/UT-sananotonio-logo.webp" alt="UTSA Logo" />
    <p>&copy; 2025 CSGRAD UTSA. All rights reserved.</p>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject shared nav and footer
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });

  // Mobile nav toggle
  document.addEventListener('click', e => {
    if (e.target.closest('.nav-toggle')) {
      document.querySelector('.nav-links')?.classList.toggle('open');
    }
  });
});
