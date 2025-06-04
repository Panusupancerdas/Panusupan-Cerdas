// =============================================
// NAVIGATION AND SCROLL EFFECTS
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // TEXT-TO-SPEECH FUNCTIONALITY
    // =============================================
    
    // Welcome message on page load
    function playWelcomeMessage() {
        const welcomeText = "Selamat Datang di Panusupan Cerdas, Kami siap membantu anda untuk menemukan lowongan pekerjaan, pelatihan gratis dan informasi beasiswa perguruan tinggi untuk membantu anak desa panusupan meraih mimpi yang cemerlang dimulai dari sini";
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(welcomeText);
            utterance.lang = 'id-ID';
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 0.8;
            
            // Add a small delay to ensure page is fully loaded
            setTimeout(() => {
                speechSynthesis.speak(utterance);
            }, 1000);
        }
    }

    // Navigation click audio feedback
    function playNavigationAudio(menuText) {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(`Membuka ${menuText}`);
            utterance.lang = 'id-ID';
            utterance.rate = 1.2;
            utterance.pitch = 1.1;
            utterance.volume = 0.7;
            
            speechSynthesis.speak(utterance);
        }
    }

    // Play welcome message when page loads
    playWelcomeMessage();

    // Mobile Navigation Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Play audio for navigation
            const menuText = this.textContent.trim();
            playNavigationAudio(menuText);
            
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // =============================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // =============================================

    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // =============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // =============================================

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPos = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =============================================
    // SCROLL ANIMATIONS
    // =============================================

    function animateOnScroll() {
        const elements = document.querySelectorAll('.activity-card, .testimonial-card, .about-item, .schedule-item, .gallery-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('scroll-fade-in', 'visible');
            }
        });
    }

    // Add initial scroll animation class to elements
    const animatedElements = document.querySelectorAll('.activity-card, .testimonial-card, .about-item, .schedule-item, .gallery-item');
    animatedElements.forEach(element => {
        element.classList.add('scroll-fade-in');
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // =============================================
    // CONTACT FORM HANDLING
    // =============================================

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.', 'success');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    // =============================================
    // NOTIFICATION SYSTEM
    // =============================================

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;

        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            removeNotification(notification);
        });
    }

    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // =============================================
    // GALLERY LIGHTBOX EFFECT
    // =============================================

    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
        
        // Add pointer cursor
        img.style.cursor = 'pointer';
    });

    function openLightbox(src, alt) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}" class="lightbox-image">
                <button class="lightbox-close">&times;</button>
            </div>
        `;

        // Add lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        lightbox.querySelector('.lightbox-content').style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;

        lightbox.querySelector('.lightbox-image').style.cssText = `
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 8px;
        `;

        lightbox.querySelector('.lightbox-close').style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Add to page
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // Animate in
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);

        // Close functionality
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                if (lightbox.parentNode) {
                    lightbox.parentNode.removeChild(lightbox);
                }
                document.body.style.overflow = '';
            }, 300);
        }

        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }

    // =============================================
    // FORM VALIDATION
    // =============================================

    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Remove error styling when user starts typing
            this.classList.remove('error');
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Field ini wajib diisi';
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Format email tidak valid';
        } else if (field.type === 'tel' && value && !isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Format nomor telepon tidak valid';
        }

        if (!isValid) {
            field.classList.add('error');
            showFieldError(field, errorMessage);
        }

        return isValid;
    }

    function showFieldError(field, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #f44336;
            font-size: 0.85rem;
            margin-top: 0.25rem;
        `;
        
        field.parentNode.appendChild(errorElement);
        
        // Add error styling to field
        field.style.borderColor = '#f44336';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // =============================================
    // PERFORMANCE OPTIMIZATIONS
    // =============================================

    // Throttle scroll events for better performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', updateActiveNav);
    window.removeEventListener('scroll', animateOnScroll);

    window.addEventListener('scroll', throttle(handleScroll, 16));
    window.addEventListener('scroll', throttle(updateActiveNav, 16));
    window.addEventListener('scroll', throttle(animateOnScroll, 16));

    // =============================================
    // ACCESSIBILITY ENHANCEMENTS
    // =============================================

    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#beranda';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #002147;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Focus management for mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenu.focus();
        }
    });

    // =============================================
    // LOADING ANIMATIONS
    // =============================================

    // Add loading animation to page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            animateOnScroll();
        }, 500);
    });

    console.log('Website EduKarir Panusupan loaded successfully!');
});

// =============================================
// UTILITY FUNCTIONS
// =============================================

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #4A90E2;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
`;

scrollTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Add hover effect to scroll top button
scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.background = '#357ABD';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = '#4A90E2';
});
