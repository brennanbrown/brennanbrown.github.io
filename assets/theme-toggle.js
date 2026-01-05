// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  
  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme
  if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    updateThemeIcon(true);
    applyDarkModeStyles();
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const isDark = body.classList.toggle('dark-theme');
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update icon
    updateThemeIcon(isDark);
    
    // Apply or remove dark mode styles
    if (isDark) {
      applyDarkModeStyles();
    } else {
      removeDarkModeStyles();
    }
  });
  
  function updateThemeIcon(isDark) {
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  }
  
  function applyDarkModeStyles() {
    // Apply dark mode to key elements
    const elements = [
      { selector: 'body', styles: { backgroundColor: '#0d1117', color: '#f0f6fc' } },
      { selector: '.bg-white', styles: { backgroundColor: '#161b22', color: '#f0f6fc' } },
      { selector: '.bg-gray-light', styles: { backgroundColor: '#161b22' } },
      { selector: '.min-height-full', styles: { backgroundColor: '#0d1117' } },
      { selector: '.col-md-5, .col-lg-4, .col-xl-3', styles: { backgroundColor: '#161b22', borderColor: '#30363d', color: '#f0f6fc' } },
      { selector: '.col-md-7, .col-lg-8, .col-xl-9', styles: { backgroundColor: '#0d1117', color: '#f0f6fc' } },
      { selector: '.border', styles: { borderColor: '#30363d' } },
      { selector: '.border-md-right', styles: { borderColor: '#30363d' } },
      { selector: '.border-md-bottom', styles: { borderColor: '#30363d' } },
      { selector: '.text-gray', styles: { color: '#8b949e' } },
      { selector: '.text-dark', styles: { color: '#f0f6fc' } },
      { selector: 'h1, h2, h3, h4, h5, h6', styles: { color: '#f0f6fc' } },
      { selector: 'p, span, div', styles: { color: '#f0f6fc' } },
      { selector: 'a:not(.text-dark)', styles: { color: '#58a6ff' } },
      { selector: '.box-shadow', styles: { backgroundColor: '#161b22', borderColor: '#30363d' } },
      { selector: '.rounded-1, .rounded-2', styles: { backgroundColor: '#161b22', borderColor: '#30363d' } },
      { selector: '.octicon', styles: { fill: '#f0f6fc' } },
      { selector: 'footer', styles: { backgroundColor: '#161b22', color: '#8b949e' } }
    ];
    
    elements.forEach(({ selector, styles }) => {
      document.querySelectorAll(selector).forEach(el => {
        Object.assign(el.style, styles);
      });
    });
  }
  
  function removeDarkModeStyles() {
    // Remove dark mode styles - reset to defaults
    const elements = [
      'body', '.bg-white', '.bg-gray-light', '.min-height-full',
      '.col-md-5', '.col-lg-4', '.col-xl-3', '.col-md-7', '.col-lg-8', '.col-xl-9',
      '.border', '.border-md-right', '.border-md-bottom', '.text-gray',
      '.text-dark', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div',
      'a:not(.text-dark)', '.box-shadow', '.rounded-1', '.rounded-2',
      '.octicon', 'footer'
    ];
    
    elements.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.backgroundColor = '';
        el.style.color = '';
        el.style.borderColor = '';
        el.style.fill = '';
      });
    });
  }
});
