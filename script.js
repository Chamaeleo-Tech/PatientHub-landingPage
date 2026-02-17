document.addEventListener('DOMContentLoaded', () => {
    // --- Render Content from data.js ---

    // 1. Stats
    // 1. Stats
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        data.stats.forEach((item, index) => {
            const statDiv = document.createElement('div');
            // Remove 'reveal' class to show immediately
            statDiv.className = `stat-item`;

            // Parse number and suffix (e.g., "10+" -> 10 and "+")
            const numericValue = parseInt(item.count);
            const suffix = item.count.replace(numericValue, '');

            // Initial render with 0
            statDiv.innerHTML = `<div class="stat-number" data-target="${numericValue}" data-suffix="${suffix}">0${suffix}</div><p>${item.label}</p>`;
            statsContainer.appendChild(statDiv);
        });

        // Animate numbers
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const suffix = stat.getAttribute('data-suffix');
            const duration = 2000; // Animation duration in ms
            const start = 0;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease-out effect
                const ease = 1 - Math.pow(1 - progress, 3);

                const current = Math.floor(ease * (target - start) + start);
                stat.innerHTML = `${current}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    stat.innerHTML = `${target}${suffix}`;
                }
            }
            requestAnimationFrame(update);
        });
    }

    // 2. Mission & Vision
    const mvContainer = document.getElementById('mv-container');
    if (mvContainer) {
        // Mission (Left)
        const missionCard = document.createElement('div');
        missionCard.className = 'mv-card reveal-left';
        missionCard.innerHTML = `<h3>Mission</h3><p>${data.missionVision.mission}</p>`;
        mvContainer.appendChild(missionCard);

        // Vision (Right)
        const visionCard = document.createElement('div');
        visionCard.className = 'mv-card reveal-right delay-200';
        visionCard.innerHTML = `<h3>Vision</h3><p>${data.missionVision.vision}</p>`;
        mvContainer.appendChild(visionCard);
    }

    // 3. Features
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        data.services.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = `service-card ${service.styleClass} reveal delay-${(index % 3) * 200}`;
            let ribbonHtml = service.isComingSoon ? '<div class="ribbon"><span>Coming Soon</span></div>' : '';
            card.innerHTML = `
                ${ribbonHtml}
                <div class="icon"><img src="${service.icon}" alt="${service.title}"></div>
                <div>${service.title}</div>
                <p>${service.description}</p>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // 4. Services
    const featuresList = document.getElementById('features-list');
    if (featuresList) {
        data.features.forEach((feature, index) => {
            const item = document.createElement('div');
            item.className = `feature-item reveal delay-${index * 100}`;
            item.innerHTML = `
                <div class="feature-number">${feature.number}</div>
                <div class="feature-content">
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            `;
            featuresList.appendChild(item);
        });
    }

    // 5. Testimonials (Carousel Logic)
    let testimonialIndex = 3; // Center index (0-6, so 3 is middle of 7)
    const testimonialAvatars = document.getElementById('testimonial-avatars');
    const testimonialCard = document.getElementById('testimonial-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function renderTestimonials() {
        if (!testimonialAvatars || !testimonialCard) return;

        testimonialAvatars.style.display = 'flex';
        testimonialAvatars.innerHTML = '';

        // Mobile: Show 3 avatars (Center + 1 on each side)
        // Desktop: Show 7 avatars (Center + 3 on each side)
        const isMobile = window.innerWidth <= 768;
        const range = isMobile ? 1 : 3;
        const total = data.testimonials.length;

        for (let i = -range; i <= range; i++) {
            let index = (testimonialIndex + i + total) % total;
            const t = data.testimonials[index];
            const img = document.createElement('img');
            img.src = t.img;
            img.alt = t.name;
            if (i === 0) img.className = 'active'; // Center item
            else img.className = 'nav-avatar';

            img.addEventListener('click', () => {
                testimonialIndex = index;
                renderTestimonials();
            });

            testimonialAvatars.appendChild(img);
        }

        const activeTestimonial = data.testimonials[testimonialIndex];
        testimonialCard.innerHTML = `
            <h4>${activeTestimonial.name}</h4>
            <span class="role">${activeTestimonial.role}</span>
            <p>${activeTestimonial.text}</p>
        `;

        testimonialCard.style.opacity = 0;
        testimonialCard.style.transform = 'translateY(20px)';
        testimonialCard.style.transition = 'all 0.4s ease-out';

        setTimeout(() => {
            testimonialCard.style.opacity = 1;
            testimonialCard.style.transform = 'translateY(0)';
        }, 50);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex - 1 + data.testimonials.length) % data.testimonials.length;
            renderTestimonials();
        });
        nextBtn.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex + 1) % data.testimonials.length;
            renderTestimonials();
        });
    }

    // Update on resize
    window.addEventListener('resize', renderTestimonials);

    // Initial Render
    renderTestimonials();


    // 6. Pricing
    // 6. Pricing
    const pricingGrid = document.getElementById('pricing-grid');
    if (pricingGrid) {
        data.pricing.forEach((plan, index) => {
            const card = document.createElement('div');
            // Add 'popular' class if isPopular is true
            card.className = `pricing-card ${index === 0 ? 'pricing-card-left' : index === data.pricing.length - 1 ? 'pricing-card-right' : ''} reveal delay-${index * 200} ${plan.isPopular ? 'popular' : ''}`;

            let featuresHtml = '<ul>';
            plan.features.forEach(f => featuresHtml += `<li><i class="fas fa-check-circle"></i> ${f}</li>`);
            featuresHtml += '</ul>';

            let badgeHtml = '';
            let btnClass = 'btn-outline'; // Default button style

            if (plan.isPopular) {
                badgeHtml = '<div class="popular-badge"><i class="far fa-star"></i> Most Popular</div>';
                btnClass = 'btn-primary'; // Solid blue for popular
            }

            // Wrap Price USD
            const priceHtml = `${plan.price} <span class="month">/month</span>`;

            card.innerHTML = `
                ${badgeHtml}
                <h3>${plan.name}</h3>
                <div class="price">${priceHtml}</div>
                <p class="card-desc">${plan.desc}</p>
                ${featuresHtml}
                <a href="https://wa.me/96171762637" target="_blank" class="btn ${btnClass} btn-block">Start 14 Days Free Trial</a>
            `;
            pricingGrid.appendChild(card);
        });
    }

    // 7. FAQ
    const faqGrid = document.getElementById('faq-grid');
    if (faqGrid) {
        // Create two columns for masonry layout
        const col1 = document.createElement('div');
        const col2 = document.createElement('div');
        col1.className = 'faq-column';
        col2.className = 'faq-column';

        // Style columns to take equal width
        col1.style.flex = '1';
        col2.style.flex = '1';
        col1.style.display = 'flex';
        col2.style.display = 'flex';
        col1.style.flexDirection = 'column';
        col2.style.flexDirection = 'column';
        col1.style.gap = '20px';
        col2.style.gap = '20px';

        data.faq.forEach((faqItem, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item reveal'; // No stagger for FAQ, just reveal
            item.innerHTML = `
                <div class="faq-question">${faqItem.question} <i class="fas fa-plus"></i></div>
                <p class="faq-answer">${faqItem.answer}</p>
            `;

            // Distribute items alternatingly
            if (index % 2 === 0) {
                col1.appendChild(item);
            } else {
                col2.appendChild(item);
            }
        });

        faqGrid.appendChild(col1);
        faqGrid.appendChild(col2);

        // Re-attach listeners to new DOM elements
        attachFaqListeners();
    }

    // --- Interaction Logic (Mobile Menu, Sticky Header, etc.) ---

    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuIcon && mobileNav) {
        mobileMenuIcon.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const icon = mobileMenuIcon.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.className = 'fas fa-times'; // Switch to X
            } else {
                icon.className = 'fas fa-bars'; // Switch back to bars
            }
        });
    }

    // Active Link Highlighting
    const desktopLinks = document.querySelectorAll('.desktop-nav a');
    desktopLinks.forEach(link => {
        link.addEventListener('click', function () {
            desktopLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close mobile menu when link clicked
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = mobileMenuIcon.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // FAQ Interaction Logic (Function to attach listeners)
    // FAQ Interaction Logic (Function to attach listeners)
    function attachFaqListeners() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('faq-expanded');
                const icon = item.querySelector('i');
                if (item.classList.contains('faq-expanded')) {
                    icon.className = 'fas fa-minus';
                } else {
                    icon.className = 'fas fa-plus';
                }
            });
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const company = document.getElementById('company');
            const description = document.getElementById('description');

            let isValid = true;
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

            if (!fullName.value.trim()) setError(fullName, true); else setError(fullName, false);
            if (!email.value.trim() || !validateEmail(email.value)) setError(email, true); else setError(email, false);
            if (!phone.value.trim()) setError(phone, true); else setError(phone, false);
            if (!description.value.trim()) setError(description, true); else setError(description, false);

            if (isValid) {
                const subject = `New Contact Message from ${fullName.value}`;
                const body = `Name: ${fullName.value}\nEmail: ${email.value}\nPhone: ${phone.value}\nCompany: ${company.value}\n\nDescription:\n${description.value}`;
                window.location.href = `mailto:support@chamaeleo.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
});
