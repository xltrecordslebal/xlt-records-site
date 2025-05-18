// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-nav__link');
  
  // Toggle Menu
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.setAttribute('aria-hidden', isExpanded);
  });
  
  // Close Menu When Clicking Links
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
  
  // Close Menu When Clicking Outside
  document.addEventListener('click', (e) => {
    if (
      !mobileMenu.contains(e.target) && 
      !menuToggle.contains(e.target) &&
      mobileMenu.getAttribute('aria-hidden') === 'false'
    ) {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
  
  // Update Copyright Year
  document.getElementById('year').textContent = new Date().getFullYear();
});
