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
    // Update CSS custom properties for theme
    if (isDark) {
      document.documentElement.style.setProperty('--color-canvas-default', '#0d1117');
      document.documentElement.style.setProperty('--color-canvas-subtle', '#161b22');
      document.documentElement.style.setProperty('--color-border-default', '#30363d');
      document.documentElement.style.setProperty('--color-border-muted', '#21262d');
      document.documentElement.style.setProperty('--color-fg-default', '#f0f6fc');
      document.documentElement.style.setProperty('--color-fg-muted', '#8b949e');
      document.documentElement.style.setProperty('--color-fg-subtle', '#6e7681');
      document.documentElement.style.setProperty('--color-bg-subtle', '#161b22');
      document.documentElement.style.setProperty('--color-bg-overlay', '#161b22');
    } else {
      document.documentElement.style.setProperty('--color-canvas-default', '#ffffff');
      document.documentElement.style.setProperty('--color-canvas-subtle', '#f6f8fa');
      document.documentElement.style.setProperty('--color-border-default', '#d0d7de');
      document.documentElement.style.setProperty('--color-border-muted', '#d8dee4');
      document.documentElement.style.setProperty('--color-fg-default', '#1f2328');
      document.documentElement.style.setProperty('--color-fg-muted', '#656d76');
      document.documentElement.style.setProperty('--color-fg-subtle', '#6e7681');
      document.documentElement.style.setProperty('--color-bg-subtle', '#f6f8fa');
      document.documentElement.style.setProperty('--color-bg-overlay', '#ffffff');
    }
    
    // Update body background
    document.body.style.backgroundColor = isDark ? '#0d1117' : '#ffffff';
    
    // Update main container backgrounds
    const mainContainers = document.querySelectorAll('.min-height-full, .container-lg, .container-md');
    mainContainers.forEach(el => {
      el.style.backgroundColor = isDark ? '#0d1117' : '#f8f9fa';
    });
    
    // Update sidebar background
    const sidebar = document.querySelector('.col-md-5, .col-lg-4, .col-xl-3');
    if (sidebar) {
      sidebar.style.backgroundColor = isDark ? '#161b22' : '#ffffff';
      sidebar.style.borderColor = isDark ? '#30363d' : '#e1e4e8';
    }
    
    // Update content area background
    const contentArea = document.querySelector('.col-md-7, .col-lg-8, .col-xl-9');
    if (contentArea) {
      contentArea.style.backgroundColor = isDark ? '#0d1117' : '#f6f8fa';
    }
    
    // Update text colors for all elements
    const allText = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, label, input, textarea');
    allText.forEach(el => {
      // Skip elements with specific color classes or inline styles
      if (!el.classList.contains('text-dark') && !el.style.color) {
        el.style.color = isDark ? '#f0f6fc' : '';
      }
    });
    
    // Update gray text
    const grayText = document.querySelectorAll('.text-gray');
    grayText.forEach(el => {
      el.style.color = isDark ? '#8b949e' : '';
    });
    
    // Update links
    const links = document.querySelectorAll('a:not(.text-dark):not([style*="color"])');
    links.forEach(el => {
      el.style.color = isDark ? '#58a6ff' : '';
    });
    
    // Update dark theme specific text
    const darkText = document.querySelectorAll('[style*="color: #222"], [style*="color:#222"]');
    darkText.forEach(el => {
      el.style.color = isDark ? '#f0f6fc' : '#222';
    });
    
    // Update all cards and containers
    const cards = document.querySelectorAll('.border, .box-shadow, .rounded-1, .rounded-2, .bg-white');
    cards.forEach(el => {
      el.style.backgroundColor = isDark ? '#161b22' : '';
      el.style.borderColor = isDark ? '#30363d' : '';
      el.style.color = isDark ? '#f0f6fc' : '';
    });
    
    // Update bordered elements
    const bordered = document.querySelectorAll('.border-md-right, .border-md-bottom, .border-top, .border-bottom');
    bordered.forEach(el => {
      el.style.borderColor = isDark ? '#30363d' : '';
    });
    
    // Update form elements
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(el => {
      el.style.backgroundColor = isDark ? '#0d1117' : '';
      el.style.borderColor = isDark ? '#30363d' : '';
      el.style.color = isDark ? '#f0f6fc' : '';
    });
    
    // Update buttons
    const buttons = document.querySelectorAll('.btn:not(.theme-toggle-btn)');
    buttons.forEach(el => {
      if (!el.classList.contains('btn-primary')) {
        el.style.backgroundColor = isDark ? '#21262d' : '';
        el.style.borderColor = isDark ? '#30363d' : '';
        el.style.color = isDark ? '#f0f6fc' : '';
      }
    });
    
    // Update code blocks
    const codeBlocks = document.querySelectorAll('code, pre');
    codeBlocks.forEach(el => {
      el.style.backgroundColor = isDark ? '#161b22' : '';
      el.style.color = isDark ? '#f0f6fc' : '';
    });
    
    // Update tables
    const tables = document.querySelectorAll('table, tr, td, th');
    tables.forEach(el => {
      el.style.backgroundColor = isDark ? '#161b22' : '';
      el.style.borderColor = isDark ? '#30363d' : '';
      el.style.color = isDark ? '#f0f6fc' : '';
    });
    
    // Update blockquotes
    const blockquotes = document.querySelectorAll('blockquote');
    blockquotes.forEach(el => {
      el.style.color = isDark ? '#8b949e' : '';
      el.style.borderLeftColor = isDark ? '#30363d' : '';
    });
    
    // Update footer if exists
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.backgroundColor = isDark ? '#161b22' : '';
      footer.style.color = isDark ? '#8b949e' : '';
    }
  }
});
