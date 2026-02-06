/**
 * M. Yahya Irvanskyah - Personal Portfolio JavaScript
 * Theme: Academic Journey as a Developer
 * 
 * This file handles all interactive functionality including:
 * - Smooth scrolling and navigation
 * - Scroll animations
 * - Project filtering
 * - Modal functionality
 * - Form handling
 * - Progress indicators
 */

// ============================================================================
// DOM ELEMENTS
// ============================================================================

// Navigation
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('.nav-link');

// Reading progress
const readingProgress = document.getElementById('readingProgress');

// Hero section
const heroSection = document.querySelector('.hero');
const statNumbers = document.querySelectorAll('.stat-number');

// Chapters (for scroll animations)
const chapters = document.querySelectorAll('.chapter');
const fadeElements = document.querySelectorAll('.fade-in');

// Project section
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

// Modal
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Contact form
const contactForm = document.getElementById('contactForm');

// ============================================================================
// NAVIGATION FUNCTIONALITY
// ============================================================================

/**
 * Toggle mobile navigation menu
 */
function toggleNavMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

navToggle.addEventListener('click', toggleNavMenu);

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    chapters.forEach(chapter => {
        const chapterTop = chapter.offsetTop;
        const chapterHeight = chapter.offsetHeight;
        const chapterId = chapter.getAttribute('id');
        
        if (scrollPosition >= chapterTop && scrollPosition < chapterTop + chapterHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${chapterId}`) {
                    link.classList.add('active');
                }
            });
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

window.addEventListener('scroll', handleNavbarScroll);

// ============================================================================
// READING PROGRESS BAR
// ============================================================================

/**
 * Update reading progress bar
 */
function updateReadingProgress() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    readingProgress.style.width = scrolled + '%';
}

// ============================================================================
// HERO SECTION ANIMATIONS
// ============================================================================

/**
 * Animate stat numbers
 */
function animateStatNumbers() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
}

/**
 * Trigger hero animations when page loads
 */
function initHeroAnimations() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        animateStatNumbers();
    }, 500);
}

// ============================================================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================================================

/**
 * Intersection Observer for scroll animations
 */
const scrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when skills section is visible
                if (entry.target.classList.contains('skill-card')) {
                    const levelBar = entry.target.querySelector('.level-bar');
                    if (levelBar) {
                        const level = levelBar.getAttribute('data-level');
                        setTimeout(() => {
                            levelBar.style.width = level + '%';
                        }, 200);
                    }
                }
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }
);

// Observe fade-in elements
fadeElements.forEach(el => scrollObserver.observe(el));

/**
 * Add fade-in class to relevant elements
 */
function addFadeInClass() {
    // Add to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => card.classList.add('fade-in'));
    
    // Add to project cards
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
    newFadeElements.forEach(el => scrollObserver.observe(el));
}

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

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

// Add click handlers to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        smoothScrollTo(targetId);
    });
});

// CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollTo('chapter1');
    });
}

// ============================================================================
// PROJECT FILTERING
// ============================================================================

/**
 * Filter projects by category
 */
function filterProjects(category) {
    projectCards.forEach(card => {
        const projectCategory = card.getAttribute('data-category');
        
        if (category === 'all' || projectCategory === category) {
            card.classList.remove('hidden');
            card.classList.add('fade-in');
            scrollObserver.observe(card);
        } else {
            card.classList.add('hidden');
            card.classList.remove('fade-in', 'visible');
        }
    });
}

// Add click handlers to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const category = button.getAttribute('data-filter');
        filterProjects(category);
    });
});

// ============================================================================
// PROJECT MODAL
// ============================================================================

/**
 * Project details data
 */
const projectData = {
    1: {
        title: 'LABSE Website',
        type: 'Academic Project',
        description: 'A comprehensive web application for the Laboratory of Software Engineering at Politeknik Negeri Malang. This project serves as a platform to manage laboratory activities, student projects, and research publications.',
        features: [
            'User authentication and role-based access control',
            'Content management system for articles and research',
            'Project portfolio management',
            'Responsive design for all devices'
        ],
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'JavaScript'],
        duration: '4 months',
        role: 'Full Stack Developer',
        challenges: 'Implementing secure authentication and managing complex database relationships.',
        learnings: 'Gained deep understanding of PHP security practices, MySQL optimization, and responsive design principles.'
    },
    2: {
        title: 'Attendance System',
        type: 'Academic Project',
        description: 'A Java-based desktop application for managing student attendance. Features include real-time tracking, report generation, and data visualization.',
        features: [
            'Student and class management',
            'Automated attendance tracking',
            'Generate attendance reports',
            'Data export to various formats'
        ],
        technologies: ['Java', 'JavaFX', 'MySQL', 'Scene Builder'],
        duration: '3 months',
        role: 'Lead Developer',
        challenges: 'Designing an intuitive user interface and implementing efficient data handling.',
        learnings: 'Mastered Java OOP concepts, GUI development with JavaFX, and database connectivity.'
    },
    3: {
        title: 'Portfolio Website',
        type: 'Personal Project',
        description: 'This portfolio website was built from scratch to showcase my academic journey and projects. It demonstrates my web development skills without relying on frameworks.',
        features: [
            'Responsive design',
            'Smooth scroll animations',
            'Project filtering system',
            'Contact form functionality'
        ],
        technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
        duration: 'Ongoing',
        role: 'Designer & Developer',
        challenges: 'Creating unique, non-generic design while maintaining clean code structure.',
        learnings: 'Deepened understanding of CSS animations, DOM manipulation, and accessibility best practices.'
    }
};

/**
 * Open project modal
 */
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <span class="project-type ${project.type.toLowerCase().includes('academic') ? 'academic' : 'personal'}">${project.type}</span>
        
        <h3>About This Project</h3>
        <p>${project.description}</p>
        
        <h3>Key Features</h3>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <h3>Technologies Used</h3>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <h3>Project Details</h3>
        <p><strong>Duration:</strong> ${project.duration}</p>
        <p><strong>Role:</strong> ${project.role}</p>
        
        <h3>Challenges</h3>
        <p>${project.challenges}</p>
        
        <h3>Key Learnings</h3>
        <p>${project.learnings}</p>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Close project modal
 */
function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for view details buttons
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Close modal on button click
modalClose.addEventListener('click', closeProjectModal);

// Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ============================================================================
// CONTACT FORM HANDLING
// ============================================================================

/**
 * Handle contact form submission
 */
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form data
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission (in production, this would send to a server)
    console.log('Form submitted:', data);
    
    // Show success message
    showNotification('Thank you! Your message has been sent successfully.', 'success');
    
    // Reset form
    contactForm.reset();
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show notification
 */
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        animation: 'fadeIn 0.3s ease',
        backgroundColor: type === 'success' ? '#22c55e' : '#ef4444',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)'
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add form submit listener
contactForm.addEventListener('submit', handleFormSubmit);

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    // Add fade-in classes to elements
    addFadeInClass();
    
    // Initialize hero animations
    initHeroAnimations();
    
    // Handle initial scroll position
    handleNavbarScroll();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Handle keyboard navigation for accessibility
 */
function handleKeyboardNavigation(e) {
    // Close modal with Escape key is already handled above
    
    // Tab navigation for modal
    if (modal.classList.contains('active')) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// ============================================================================
// END OF JAVASCRIPT
// ============================================================================
