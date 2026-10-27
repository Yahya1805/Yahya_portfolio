/**
 * Contact form validation and status messages.
 *
 * Delivery is intentionally not implemented. Never show a success message
 * until a real delivery service is connected.
 */
(function () {
    window.Portfolio = window.Portfolio || {};

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    let initialized = false;

    /**
     * Handle contact form submission
     */
    function handleFormSubmit(e) {
        e.preventDefault();

        if (formStatus) {
            formStatus.textContent = '';
            formStatus.classList.remove('is-info');
        }

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

        // Delivery is intentionally not implemented.
        // Do not show a success message until a real delivery service is connected.
        if (formStatus) {
            formStatus.textContent = 'This form is not connected to a delivery service yet. Your message was not sent.';
            formStatus.classList.add('is-info');
        }
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
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');

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

    /**
     * Initialize contact form handling once.
     */
    function init() {
        if (initialized) return;
        initialized = true;

        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    }

    window.Portfolio.contact = {
        init
    };
})();
