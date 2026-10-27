/**
 * Project detail modal, focus management, and scroll lock with bilingual support.
 *
 * Project content comes from window.portfolioData in js/data.js.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    // Remember the element that opened the project dialog so focus can be restored
    let lastFocusedElement = null;
    let initialized = false;
    let activeProjectId = null;

    /**
     * Escape static project text before inserting it into the dialog markup.
     */
    function escapeHtml(value) {
        if (value === null || value === undefined) return '';
        return String(value).replace(/[&<>"']/g, character => {
            const entities = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            return entities[character];
        });
    }

    /**
     * Only render a link when it is a verified HTTP(S) URL or internal path.
     */
    function isSafeUrl(value) {
        if (!value) return false;
        if (value.startsWith('assets/') || value.startsWith('http://') || value.startsWith('https://')) {
            return true;
        }
        try {
            const url = new URL(value);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch {
            return false;
        }
    }

    /**
     * Retrieve project or certificate data by ID.
     */
    function getPortfolioItem(id) {
        const projects = window.portfolioData?.projects || {};
        const certificates = window.portfolioData?.certificates || {};
        return projects[id] || certificates[id] || null;
    }

    /**
     * Get active language code ('id' or 'en').
     */
    function getCurrentLang() {
        return window.Portfolio.i18n?.getLanguage?.() || 'id';
    }

    /**
     * Helper to resolve localized text.
     */
    function loc(val, lang) {
        return window.portfolioData?.getLocalized?.(val, lang) || (typeof val === 'string' ? val : '');
    }

    /**
     * Translate UI key.
     */
    function t(key, tokens = {}) {
        return window.Portfolio.i18n?.t?.(key, tokens) || key;
    }

    /**
     * Render modal content for a project or certificate.
     */
    function renderModalContent(projectId) {
        const project = getPortfolioItem(projectId);
        if (!project || !modalBody) return;

        const lang = getCurrentLang();
        const isCertificate = project.category === 'certificates';
        const typeClass = project.typeClass || (isCertificate ? 'academic' : 'personal');

        const title = loc(project.title, lang);
        const type = loc(project.type, lang) || (isCertificate ? (lang === 'id' ? 'Sertifikat' : 'Certificates') : (lang === 'id' ? 'Proyek' : 'Project'));
        const description = loc(project.description, lang) || (lang === 'id' ? 'Deskripsi belum dikonfirmasi.' : 'Description not confirmed yet.');

        // Status badge
        let statusText = '';
        let statusBadgeClass = '';
        if (project.status) {
            statusText = loc(project.status, lang);
            statusBadgeClass = project.statusCode || (typeof project.status === 'string' ? project.status.toLowerCase().replace(/\s+/g, '-') : '');
        }

        const rawFeatures = loc(project.features, lang);
        const features = Array.isArray(rawFeatures) ? rawFeatures : [];

        const competencies = Array.isArray(project.competencies) ? project.competencies : [];
        const technologies = Array.isArray(project.technologies) ? project.technologies : [];
        const limitations = Array.isArray(project.limitations) ? project.limitations : [];
        const links = project.links || {};

        const confirmationNote = project.needsConfirmation
            ? `<p class="modal-note">${escapeHtml(t('modal.noteConfirmation'))}</p>`
            : '';

        let featureMarkup = '';
        if (competencies.length) {
            featureMarkup = `
                <h3>${escapeHtml(t('modal.headingCompetencies'))}</h3>
                <ul class="modal-competency-list">
                    ${competencies.map(comp => {
                        const compTitle = loc(comp.title, lang);
                        const compDesc = loc(comp.description, lang);
                        return `
                            <li>
                                <strong>${escapeHtml(comp.code)} &mdash; ${escapeHtml(compTitle)}</strong>
                                ${compDesc ? `<p>${escapeHtml(compDesc)}</p>` : ''}
                            </li>
                        `;
                    }).join('')}
                </ul>
            `;
        } else if (features.length) {
            featureMarkup = `
                <h3>${escapeHtml(t('modal.headingFeatures'))}</h3>
                <ul>
                    ${features.map(feature => `<li>${escapeHtml(feature)}</li>`).join('')}
                </ul>
            `;
        }

        const techHeading = isCertificate ? t('modal.headingCompField') : t('modal.headingTech');
        const technologyMarkup = technologies.length
            ? `
                <h3>${escapeHtml(techHeading)}</h3>
                <div class="project-tech">
                    ${technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
                </div>
            `
            : '';

        const duration = loc(project.duration, lang);
        const role = loc(project.role, lang);
        const detailsMarkup = duration || role
            ? `
                <h3>${escapeHtml(t('modal.headingDetails'))}</h3>
                ${duration ? `<p><strong>${escapeHtml(t('modal.labelDuration'))}</strong> ${escapeHtml(duration)}</p>` : ''}
                ${role ? `<p><strong>${escapeHtml(t('modal.labelRole'))}</strong> ${escapeHtml(role)}</p>` : ''}
            `
            : '';

        const challenges = loc(project.challenges, lang);
        const challengesMarkup = challenges
            ? `<h3>${escapeHtml(t('modal.headingChallenges'))}</h3><p>${escapeHtml(challenges)}</p>`
            : '';

        const learnings = loc(project.learnings, lang);
        const learningsMarkup = learnings
            ? `<h3>${escapeHtml(t('modal.headingLearnings'))}</h3><p>${escapeHtml(learnings)}</p>`
            : '';

        const rawLimitations = loc(project.limitations, lang);
        const limList = Array.isArray(rawLimitations) ? rawLimitations : [];
        const limitationsMarkup = limList.length
            ? `
                <h3>${escapeHtml(t('modal.headingLimitations'))}</h3>
                <ul>
                    ${limList.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
                </ul>
            `
            : '';

        const linkItems = [];
        if (links.certificate && isSafeUrl(links.certificate)) {
            linkItems.push(`<li><a href="${escapeHtml(links.certificate)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('modal.linkPdf'))}</a></li>`);
        }
        if (links.repository && isSafeUrl(links.repository)) {
            linkItems.push(`<li><a href="${escapeHtml(links.repository)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('modal.linkRepo'))}</a></li>`);
        }
        if (links.demo && isSafeUrl(links.demo)) {
            linkItems.push(`<li><a href="${escapeHtml(links.demo)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t('modal.linkDemo'))}</a></li>`);
        }

        const progressMarkup = statusText || (project.progress !== undefined && project.progress !== null)
            ? `
                <div class="modal-status-bar" style="display: flex; align-items: center; gap: 0.6rem; margin: 0.6rem 0 1rem;">
                    ${statusText ? `<span class="status-badge ${statusBadgeClass}">${escapeHtml(statusText)}</span>` : ''}
                    ${project.progress !== undefined && project.progress !== null ? `<span class="project-progress-label">${escapeHtml(t('projects.progressLabel', { val: project.progress }))}</span>` : ''}
                </div>
            `
            : '';

        const linksMarkup = linkItems.length
            ? `<h3>${t('modal.headingLinks')}</h3><ul>${linkItems.join('')}</ul>`
            : `<h3>${t('modal.headingLinks')}</h3><p>${escapeHtml(isCertificate ? t('modal.noDocCert') : t('modal.noDocProject'))}</p>`;

        const aboutHeading = isCertificate ? t('modal.headingAboutCert') : t('modal.headingAboutProject');
        const descriptionMarkup = description
            .split('\n\n')
            .map(p => `<p>${escapeHtml(p.trim())}</p>`)
            .join('');

        modalBody.innerHTML = `
            <h2 id="projectModalTitle">${escapeHtml(title)}</h2>
            <span class="project-type ${typeClass}">${escapeHtml(type)}</span>
            ${progressMarkup}
            ${confirmationNote}

            <h3>${escapeHtml(aboutHeading)}</h3>
            ${descriptionMarkup}

            ${featureMarkup}
            ${technologyMarkup}
            ${detailsMarkup}
            ${challengesMarkup}
            ${learningsMarkup}
            ${limitationsMarkup}
            ${linksMarkup}
        `;
    }

    /**
     * Open project or certificate modal.
     */
    function openProjectModal(projectId, triggerElement) {
        const project = getPortfolioItem(projectId);
        if (!project) return;

        activeProjectId = projectId;
        lastFocusedElement = triggerElement instanceof HTMLElement ? triggerElement : document.activeElement;

        renderModalContent(projectId);

        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            if (modal.classList.contains('active')) {
                modalClose.focus();
            }
        }, 300);
    }

    /**
     * Close project modal.
     */
    function closeProjectModal() {
        activeProjectId = null;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus();
        }
    }

    /**
     * Handle Escape and keyboard focus trapping for the modal.
     */
    function handleModalKeydown(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }

        if (!modal.classList.contains('active')) return;

        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    /**
     * Re-render current modal content if open and language changes.
     */
    function updateLanguage(lang) {
        if (modal.classList.contains('active') && activeProjectId) {
            renderModalContent(activeProjectId);
        }
    }

    /**
     * Initialize modal interactions once.
     */
    function init() {
        if (initialized) return;
        initialized = true;

        document.addEventListener('click', (e) => {
            const button = e.target.closest('.view-details-btn[data-project]');
            if (button) {
                const projectId = button.getAttribute('data-project');
                openProjectModal(projectId, button);
            }
        });

        modalClose.addEventListener('click', closeProjectModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        document.addEventListener('keydown', handleModalKeydown);
    }

    window.Portfolio.modal = {
        init,
        openProjectModal,
        closeProjectModal,
        updateLanguage
    };
})();
