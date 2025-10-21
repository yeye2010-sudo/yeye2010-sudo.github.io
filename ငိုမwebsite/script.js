
document.addEventListener('DOMContentLoaded', function() {
    //smooth scrolling 
    initSmoothScrolling();
    // form စစ် 
    initFormValidation();
    // navigation active initilize လုပ် 
    initNavigationActiveState();
    // submission ထဲက membership initilize လုပ် 
    initMembershipForm();
    //animation လေ 
    initAnimations();
});

// smooth scolling အတွက် function လေ 
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // close menu if open only for phone or tablet :) 
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
}

// navigation active scroll position
function initNavigationActiveState() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // update for every action 
}

// Form validation
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
        // real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid') && this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                }
            });
        });
    });
}

// Membership form submission နဲ့ error check နည်း 
function initMembershipForm() {
    const membershipForm = document.getElementById('membershipForm');
    const modal = document.getElementById('membershipModal');
    
    if (membershipForm) {
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (this.checkValidity()) {
                // message ပြ
                showSuccessMessage();
                
                // reset form
                this.reset();
                this.classList.remove('was-validated');
                setTimeout(() => {
                    const modalInstance = bootstrap.Modal.getInstance(modal);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                }, 2000);
            }
        });
    }
}

// error မရှိရင် ပြတဲ့ message
function showSuccessMessage() {
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show position-fixed';
    alert.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px;';
    alert.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        <strong>ကြိုဆိုပါတယ် </strong> Your membership application has been submitted successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alert);
    
    // auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

function initAnimations() {
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            header.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // card animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // click effect
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// animation style with innerCSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .navbar-scrolled {
        background: rgba(59, 44, 37, 0.98) !important;
        box-shadow: 0 2px 30px rgba(0, 0, 0, 0.4);
    }
    
    .card-enter {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .card-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`;
document.head.appendChild(style);

// nav bar scoll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Add membership type 
document.addEventListener('DOMContentLoaded', function() {
    const membershipTypes = {
        'rookie': 'Basic membership with access to community forums and events.',
        'regular': 'Standard membership with additional perks and exclusive content.',
        'elite': 'Premium membership with priority access and special privileges.',
        'vip': 'Ultimate membership with all benefits and direct access to leadership.',
        'allah':'Kalar and easily be direct access with kalar members such as Phoe la pyae',
        'chinese':'TeTe gonna love you bro'
    };
    
    const selectElement = document.getElementById('membershipType');
    if (selectElement) {
        selectElement.addEventListener('change', function() {
            const selectedValue = this.value;
            const helpText = document.querySelector('.membership-help');
            
            if (helpText) helpText.remove();
            
            if (selectedValue && membershipTypes[selectedValue]) {
                const help = document.createElement('div');
                help.className = 'form-text membership-help text-muted mt-1';
                help.innerHTML = `<i class="bi bi-info-circle me-1"></i>${membershipTypes[selectedValue]}`;
                this.parentNode.appendChild(help);
            }
        });
    }
});

// Console welcome message
console.log('%cWin Ko Gang Website', 'color: #a67c52; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the gang! 🏴‍☠️', 'color: #f8f4ef; font-size: 14px;');