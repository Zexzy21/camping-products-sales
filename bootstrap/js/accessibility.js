
    // Accessibility Tools Functionality
    // High Contrast Toggle - Fixed Version
    document.addEventListener('DOMContentLoaded', function() {
      const contrastToggle = document.getElementById('contrastToggle');
      
      contrastToggle.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        const isContrast = document.body.classList.contains('high-contrast');
        this.setAttribute('aria-pressed', isContrast);
        localStorage.setItem('highContrast', isContrast);
        
        // Update button text
        if (isContrast) {
          this.innerHTML = '<i class="fas fa-adjust me-1" aria-hidden="true"></i>Normal Contrast';
        } else {
          this.innerHTML = '<i class="fas fa-adjust me-1" aria-hidden="true"></i>High Contrast';
        }
      });

      // Check for saved preference
      if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
        contrastToggle.setAttribute('aria-pressed', 'true');
        contrastToggle.innerHTML = '<i class="fas fa-adjust me-1" aria-hidden="true"></i>Normal Contrast';
      }
    
      
      // Font Size Increase
      const fontIncrease = document.getElementById('fontIncrease');
      fontIncrease.addEventListener('click', function() {
        const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        document.documentElement.style.fontSize = (currentSize + 1) + 'px';
        localStorage.setItem('fontSize', (currentSize + 1));
      });
      
      // Font Size Reset
      const fontReset = document.getElementById('fontReset');
      fontReset.addEventListener('click', function() {
        document.documentElement.style.fontSize = '';
        localStorage.removeItem('fontSize');
      });
      
      // Check for saved font size preference
      const savedFontSize = localStorage.getItem('fontSize');
      if (savedFontSize) {
        document.documentElement.style.fontSize = savedFontSize + 'px';
      }
      
      // Skip link focus
      document.querySelector('.skip-link').addEventListener('click', function() {
        document.getElementById('main-content').setAttribute('tabindex', '-1');
        document.getElementById('main-content').focus();
      });
    });
    
    // Reduce motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '1ms');
    }
