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
            // For this static demo, just toggle an active class or alert
            // In a real app, this would expand the answer
            const icon = item.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');

                // Add a temporary answer dynamically if it doesn't exist
                if (!item.querySelector('.faq-answer')) {
                    const answer = document.createElement('p');
                    answer.className = 'faq-answer';
                    answer.style.marginTop = '10px';
                    answer.style.color = '#666';
                    answer.style.fontSize = '0.9rem';
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
});
