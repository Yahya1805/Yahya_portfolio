/**
 * Navigation, scrollspy, smooth scrolling, and reading progress.
 *
 * Exposes window.Portfolio.navigation for the main initializer.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const readingProgress = document.getElementById('readingProgress');
    const pageSections = document.querySelectorAll('main section[id]');

    let initialized = false;

    /**
     * Toggle mobile navigation menu
     */
    function toggleNavMenu() {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        const closeText = window.Portfolio.i18n?.t?.('nav.toggleClose') || 'Tutup menu navigasi';
        const openText = window.Portfolio.i18n?.t?.('nav.toggleOpen') || 'Buka menu navigasi';
        navToggle.setAttribute('aria-label', isOpen ? closeText : openText);
    }

    /**
     * Close the mobile navigation menu.
     */
    function closeNavMenu(returnFocus = false) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        const openText = window.Portfolio.i18n?.t?.('nav.toggleOpen') || 'Buka menu navigasi';
        navToggle.setAttribute('aria-label', openText);

        if (returnFocus) {
            navToggle.focus();
        }
    }

    /**
     * Update active navigation link based on scroll position
     */
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 120;
        let activeId = 'home';

        pageSections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                activeId = section.id;
            }
        });

        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${activeId}`;
            link.classList.toggle('active', isActive);

            if (isActive) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    /**
     * Handle navbar scroll behavior
     */
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        updateActiveNavLink();
        updateReadingProgress();
    }

    /**
     * Update reading progress bar
     */
    function updateReadingProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
        readingProgress.style.width = scrolled + '%';
    }

    /**
     * Smooth scroll to section
     */
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Initialize navigation once.
     */
    function init() {
        if (initialized) return;
        initialized = true;

        navToggle.addEventListener('click', toggleNavMenu);

        // Close menu when clicking any navigation link, including the CTA
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeNavMenu();
            });
        });

        window.addEventListener('scroll', handleNavbarScroll);

        // Add click handlers to navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                smoothScrollTo(targetId);
            });
        });

        // CTA buttons that point to an in-page section
        document.querySelectorAll('.cta-button, .nav-cta').forEach(button => {
            button.addEventListener('click', (e) => {
                const href = button.getAttribute('href');
                if (!href || !href.startsWith('#')) return;

                e.preventDefault();
                smoothScrollTo(href.substring(1));
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeNavMenu(true);
            }
        });

        // Handle initial scroll position
        handleNavbarScroll();
    }

    window.Portfolio.navigation = {
        init,
        closeNavMenu
    };
})();
