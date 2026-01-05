// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme
  if (currentTheme === 'dark') {
    html.classList.add('dark-theme');
    updateThemeIcon(true);
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const isDark = html.classList.toggle('dark-theme');
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update icon
    updateThemeIcon(isDark);
    
    // Update styles
    updateThemeStyles(isDark);
  });
  
  function updateThemeIcon(isDark) {
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  }
  
  function updateThemeStyles(isDark) {
    // Update background colors
    const elementsToUpdate = [
      { selector: '.min-height-full', darkBg: '#0d1117', lightBg: '#f8f9fa' },
      { selector: 'body', darkBg: '#0d1117', lightBg: '#ffffff' },
      { selector: '.bg-gray-light', darkBg: '#161b22', lightBg: '#f6f8fa' },
      { selector: '.border-md-right', darkBorder: '#30363d', lightBorder: '#e1e4e8' },
      { selector: '.border-md-bottom', darkBorder: '#30363d', lightBorder: '#e1e4e8' }
    ];
    
    elementsToUpdate.forEach(({ selector, darkBg, lightBg, darkBorder, lightBorder }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (isDark) {
          if (darkBg) el.style.backgroundColor = darkBg;
          if (darkBorder) el.style.borderColor = darkBorder;
        } else {
          if (lightBg) el.style.backgroundColor = lightBg;
          if (lightBorder) el.style.borderColor = lightBorder;
        }
      });
    });
    
    // Update text colors
    const textElements = document.querySelectorAll('.text-gray, .f4, p, h1, h2, h3, h4, h5, h6');
    textElements.forEach(el => {
      el.style.color = isDark ? '#f0f6fc' : '';
    });
    
    // Update links
    const links = document.querySelectorAll('a:not(.text-dark)');
    links.forEach(el => {
      el.style.color = isDark ? '#58a6ff' : '';
    });
    
    // Update cards and containers
    const cards = document.querySelectorAll('.border, .box-shadow, .rounded-1, .rounded-2');
    cards.forEach(el => {
      if (isDark) {
        el.style.backgroundColor = '#161b22';
        el.style.borderColor = '#30363d';
        el.style.color = '#f0f6fc';
      } else {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
        el.style.color = '';
      }
    });
  }
});
