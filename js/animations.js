/**
 * Reveal animations and IntersectionObserver setup.
 *
 * Exposes window.Portfolio.animations for other classic scripts.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const fadeElements = document.querySelectorAll('.fade-in');

    /**
     * Intersection Observer for scroll animations
     */
    const scrollObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    /**
     * Observe one element for the reveal animation.
     */
    function observe(element) {
        scrollObserver.observe(element);
    }

    /**
     * Add fade-in class to relevant elements and observe them.
     */
    function addFadeInClass() {
        // Add to skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => card.classList.add('fade-in'));

        // Add to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => card.classList.add('fade-in'));

        // Add to certificate cards
        const certificateCards = document.querySelectorAll('.certificate-card');
        certificateCards.forEach(card => card.classList.add('fade-in'));

        // Add to experience items
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach(item => item.classList.add('fade-in'));

        // Add to fact items
        const factItems = document.querySelectorAll('.fact-item');
        factItems.forEach(item => item.classList.add('fade-in'));

        // Add to soft skill items
        const softSkillItems = document.querySelectorAll('.soft-skill-item');
        softSkillItems.forEach(item => item.classList.add('fade-in'));

        // Add to timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => item.classList.add('fade-in'));

        // Re-observe with Intersection Observer
        const newFadeElements = document.querySelectorAll('.fade-in');
        newFadeElements.forEach(el => observe(el));
    }

    /**
     * Initialize reveal animations once.
     */
    function init() {
        fadeElements.forEach(el => observe(el));
        addFadeInClass();
    }

    window.Portfolio.animations = {
        init,
        observe,
        addFadeInClass
    };
})();
