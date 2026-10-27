/**
 * Main initialization for the portfolio.
 *
 * Feature modules expose init functions through window.Portfolio. This file
 * calls each one exactly once, after the DOM is ready.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const currentYear = document.getElementById('currentYear');

    let initialized = false;

    /**
     * Update the copyright year
     */
    function updateCurrentYear() {
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
    }

    /**
     * Initialize all functionality when DOM is ready.
     */
    function init() {
        if (initialized) return;
        initialized = true;

        // Initialize internationalization (i18n) first so DOM labels match saved language
        if (window.Portfolio.i18n?.init) {
            window.Portfolio.i18n.init();
        }

        // Add fade-in classes and observe reveal targets
        window.Portfolio.animations.init();

        // Show the initial project count and bind project filters
        window.Portfolio.projects.init();

        // Update footer year
        updateCurrentYear();

        // Bind modal controls, focus trap, and Escape handling
        window.Portfolio.modal.init();

        // Bind mobile navigation, scrollspy, and reading progress
        window.Portfolio.navigation.init();
    }

    // Run initialization when DOM is ready
    document.addEventListener('DOMContentLoaded', init);
})();
