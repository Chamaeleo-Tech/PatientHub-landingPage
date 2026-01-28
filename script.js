document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    // Active Link Highlighting (Desktop)
    const desktopLinks = document.querySelectorAll('.desktop-nav a');
    desktopLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all links
            desktopLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    if (mobileMenuIcon && mobileNav) {
        mobileMenuIcon.addEventListener('click', () => {
            mobileNav.classList.toggle('active');

            // Toggle icon representation (bars vs times)
            const icon = mobileMenuIcon.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = mobileMenuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Sticky Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // FAQ Interaction (Simple toggle for demo)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active'); // Add this line
            const icon = item.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');

                // Add a temporary answer dynamically if it doesn't exist
                if (!item.querySelector('.faq-answer')) {
                    const answer = document.createElement('p');
                    answer.className = 'faq-answer';
                    // answer.style.marginTop = '10px'; // Remove inline styles to use CSS
                    // answer.style.color = '#666';    // Remove inline styles to use CSS
                    // answer.style.fontSize = '0.9rem'; // Remove inline styles to use CSS
                    answer.textContent = "This is a placeholder answer for the FAQ. The platform helps manage patient data securely and efficiently.";
                    item.appendChild(answer);
                }
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
                const answer = item.querySelector('.faq-answer');
                if (answer) answer.remove();
            }
        });
    });

    // Contact Form Validation & Mailto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Inputs
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const company = document.getElementById('company');
            const description = document.getElementById('description');

            let isValid = true;

            // Helper to set error
            const setError = (input, isError) => {
                const formGroup = input.parentElement;
                const errorMsg = formGroup.querySelector('.error-msg');
                if (isError) {
                    input.classList.add('input-error');
                    if (errorMsg) errorMsg.style.display = 'block';
                    isValid = false;
                } else {
                    input.classList.remove('input-error');
                    if (errorMsg) errorMsg.style.display = 'none';
                }
            };

            // Validate
            if (!fullName.value.trim()) setError(fullName, true);
            else setError(fullName, false);

            if (!email.value.trim() || !validateEmail(email.value)) setError(email, true);
            else setError(email, false);

            if (!phone.value.trim()) setError(phone, true);
            else setError(phone, false);

            if (!description.value.trim()) setError(description, true);
            else setError(description, false);

            // If valid, open mailto
            if (isValid) {
                const subject = `New Contact Message from ${fullName.value}`;
                const body = `Name: ${fullName.value}\nEmail: ${email.value}\nPhone: ${phone.value}\nCompany: ${company.value}\n\nDescription:\n${description.value}`;

                window.location.href = `mailto:support@patienthub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
