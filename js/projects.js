/**
 * Project filtering, visible status, and card bilingual content updates.
 *
 * Depends on window.Portfolio.animations and window.Portfolio.i18n.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const filterButtons = document.querySelectorAll('.filter-btn');
    function getProjectCards() {
        return document.querySelectorAll('.project-card');
    }

    let currentCategory = 'projects';
    let initialized = false;

    function getCurrentLang() {
        return window.Portfolio.i18n?.getLanguage?.() || 'id';
    }

    function t(key, tokens = {}) {
        return window.Portfolio.i18n?.t?.(key, tokens) || key;
    }

    function loc(val, lang) {
        return window.portfolioData?.getLocalized?.(val, lang) || (typeof val === 'string' ? val : '');
    }

    /**
     * Update the visible item count for screen readers and sighted users.
     */
    function updateProjectsStatus(category = currentCategory) {
        const projectsStatus = document.getElementById('projectsStatus');
        if (!projectsStatus) return;

        const visibleCount = document.querySelectorAll('.project-card:not(.hidden)').length;
        const lang = getCurrentLang();

        if (category === 'certificates') {
            projectsStatus.textContent = t('projects.statusCertificates', {
                count: visibleCount,
                s: visibleCount === 1 ? '' : 's'
            });
        } else {
            projectsStatus.textContent = t('projects.statusProjects', {
                count: visibleCount,
                s: visibleCount === 1 ? '' : 's'
            });
        }
    }

    /**
     * Update card texts across all project cards based on active language.
     */
    function updateCardContent(lang) {
        const projectsData = window.portfolioData?.projects || {};
        const certificatesData = window.portfolioData?.certificates || {};

        getProjectCards().forEach(card => {
            const projectId = card.getAttribute('data-project-id');
            const data = projectsData[projectId] || certificatesData[projectId];
            if (!data) return;

            // Type badge
            const typeEl = card.querySelector('.project-type');
            if (typeEl && data.type) {
                typeEl.textContent = loc(data.type, lang);
            }

            // Title
            const titleEl = card.querySelector('h3');
            if (titleEl && data.title) {
                titleEl.textContent = loc(data.title, lang);
            }

            // Short Description
            const descEl = card.querySelector('.project-info > p:not(.project-link-note)');
            if (descEl && data.shortDescription) {
                descEl.textContent = loc(data.shortDescription, lang);
            }

            // Status Badge
            const statusEl = card.querySelector('.status-badge');
            if (statusEl) {
                const statusAttr = statusEl.getAttribute('data-status');
                if (statusAttr === 'completed') {
                    if (data.category === 'certificates') {
                        statusEl.textContent = t('projects.badgeVerifiedDoc');
                    } else {
                        statusEl.textContent = t('projects.badgeCompleted');
                    }
                } else if (statusAttr === 'in-progress') {
                    statusEl.textContent = t('projects.badgeInProgress');
                } else if (statusAttr === 'not-started') {
                    statusEl.textContent = t('projects.badgeNotStarted');
                }
            }

            // Progress label
            const progressLabel = card.querySelector('.project-progress-label');
            if (progressLabel) {
                if (data.category === 'certificates' && projectId === 'lspsmk-jaringan-komputer') {
                    progressLabel.textContent = t('projects.progressPages');
                } else if (data.progress !== undefined && data.progress !== null) {
                    progressLabel.textContent = t('projects.progressLabel', { val: data.progress });
                } else {
                    progressLabel.textContent = t('projects.progressNotConfirmed');
                }
            }

            // Action Buttons
            const viewDetailsBtn = card.querySelector('.view-details-btn:not(.btn-primary)');
            if (viewDetailsBtn) {
                viewDetailsBtn.textContent = t('projects.btnViewDetails');
            }

            const viewCertLink = card.querySelector('.view-details-btn.btn-primary');
            if (viewCertLink) {
                viewCertLink.textContent = t('projects.btnViewCertificate');
            }

            // Note text
            const noteEl = card.querySelector('.project-link-note');
            if (noteEl) {
                if (projectId === 'lspsmk-jaringan-komputer') {
                    noteEl.textContent = t('projects.noteCertPdf');
                } else if (projectId === 'itbox-cyber-security') {
                    noteEl.textContent = t('projects.noteCertProgress');
                } else if (projectId === 'wpu-course') {
                    noteEl.textContent = t('projects.noteCertPlanned');
                } else {
                    noteEl.textContent = t('projects.noteNoLinks');
                }
            }
        });
    }

    /**
     * Filter projects and certificates
     */
    function filterProjects(category) {
        currentCategory = category;
        let visibleCount = 0;

        getProjectCards().forEach(card => {
            const projectCategories = (card.getAttribute('data-category') || '').split(/\s+/);

            if (projectCategories.includes(category)) {
                card.classList.remove('hidden');
                card.classList.add('fade-in');
                window.Portfolio.animations?.observe?.(card);
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('fade-in', 'visible');
            }
        });

        const emptyState = document.getElementById('certificatesEmptyState');
        if (emptyState) {
            if (category === 'certificates' && visibleCount === 0) {
                emptyState.classList.remove('hidden');
                emptyState.classList.add('fade-in');
                window.Portfolio.animations?.observe?.(emptyState);
            } else {
                emptyState.classList.add('hidden');
                emptyState.classList.remove('fade-in', 'visible');
            }
        }

        updateProjectsStatus(category);
    }

    /**
     * Called by i18n when language switches.
     */
    function updateLanguage(lang) {
        updateCardContent(lang);
        updateProjectsStatus(currentCategory);
    }

    /**
     * Initialize project filtering once.
     */
    function init() {
        if (initialized) return;
        initialized = true;

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');

                const category = button.getAttribute('data-filter');
                filterProjects(category);
            });
        });

        if (window.location.hash === '#certificates') {
            const certBtn = document.querySelector('.filter-btn[data-filter="certificates"]');
            if (certBtn) {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                certBtn.classList.add('active');
                certBtn.setAttribute('aria-pressed', 'true');
                filterProjects('certificates');
                return;
            }
        }

        // Initial filter
        filterProjects('projects');
    }

    window.Portfolio.projects = {
        init,
        filterProjects,
        updateProjectsStatus,
        updateLanguage
    };
})();
