// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
    });
}

// ===== Form Submission =====
const followerForm = document.getElementById('followerForm');
const successMessage = document.getElementById('successMessage');

if (followerForm) {
    followerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const platform = document.getElementById('platform').value;
        const username = document.getElementById('username').value;
        const followers = document.getElementById('followers').value;

        if (!platform || !username || !followers) {
            alert('Mohon isi semua field yang diperlukan');
            return;
        }

        followerForm.style.display = 'none';
        successMessage.style.display = 'block';

        console.log('Form Data:', {
            platform,
            username,
            followers,
            timestamp: new Date()
        });

        setTimeout(() => {
            followerForm.reset();
            followerForm.style.display = 'flex';
            successMessage.style.display = 'none';
        }, 3000);
    });
}

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    }
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            if (nav && nav.style.display !== 'none') {
                nav.style.display = 'none';
            }
        }
    });
});

// ===== Number Input Validation =====
const followersInput = document.getElementById('followers');

if (followersInput) {
    followersInput.addEventListener('input', (e) => {
        let value = parseInt(e.target.value);

        if (value > 10000) {
            e.target.value = 10000;
        }

        if (value < 0) {
            e.target.value = 1;
        }
    });
}

// ===== Animate elements on scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

document.querySelectorAll('.step').forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(step);
});

// ===== Dynamic Year in Footer =====
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');

    if (footerText) {
        footerText.textContent = `© ${currentYear} FollowerBoost. Semua hak dilindungi.`;
    }
});