const NAV_HTML = `
<nav class="navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo-left">
      <img src="logos/csgradlogo.jpeg" alt="CSGRAD Logo" />
    </a>
    <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
    <ul class="nav-links">
      <li><a href="about.html">About</a></li>
      <li><a href="officers.html">Officers</a></li>
      <li><a href="resources.html">Resources and FAQ</a></li>
    </ul>
    <a href="https://utsa.edu" class="nav-logo-right">
      <img src="logos/UT-sananotonio-logo.webp" alt="UT San Antonio Logo" />
    </a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-links">
    <div class="container">
      <span>Related Links:</span>
      <a href="https://caicc.utsa.edu/computer-science/" target="_blank" rel="noopener">CS Department at UT San Antonio</a>
      <a href="https://www.utsa.edu/" target="_blank" rel="noopener">UT San Antonio</a>
      <a href="https://github.com/csgradofficial" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
  <div class="footer">
    <div class="footer-container">
      <p>&copy; 2025 CSGRAD UT San Antonio. All rights reserved.</p>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
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
