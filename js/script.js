   // Initialize AOS
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-quart'
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add("hidden");
        });
    });

    // Header Background Change on Scroll (100vh)
    const navbar = document.getElementById("main-nav");
    
    window.addEventListener('scroll', () => {
      const scrollThreshold = window.innerHeight; // 100vh
      
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });


// Scroll to Top Button
window.addEventListener('scroll', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const scrollTopBtn = document.getElementById('scroll-top');
    const vh100 = window.innerHeight;

    if (window.scrollY > vh100) {
        // We scrolled past 100vh
        scrollTopBtn.classList.add('show');
        scrollTopBtn.classList.remove('translate-y-10');
        
        // Add a class to the wrapper or animate WhatsApp up
        whatsappBtn.parentElement.classList.add('scrolled');
    } else {
        // We are at the top
        scrollTopBtn.classList.remove('show');
        scrollTopBtn.classList.add('translate-y-10');
        
        whatsappBtn.parentElement.classList.remove('scrolled');
    }
});