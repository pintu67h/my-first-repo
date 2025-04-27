export function setupSmoothScrolling() {
  // Get all links that start with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each anchor link
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href') as string;
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
