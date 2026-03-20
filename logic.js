document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const contactForm = document.getElementById('contactForm');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                    // Trigger animation for items in newly active tab
                    animateTabContent(content);
                }
            });
        });
    });

    // Animate elements when they scroll into view
    function animateTabContent(container) {
        const items = container.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }

    // Scroll animations using Intersection Observer
    const animatedSections = document.querySelectorAll('.sobre, .especiais, .cardapio, .galeria, .localizacao, .contato');
    
    const sectionAnimObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSectionElements(entry.target);
                sectionAnimObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05
    });

    function animateSectionElements(section) {
        const items = section.querySelectorAll('.feature-card, .especial-card, .menu-item, .gallery-photo, .info-card, .promo-card, .contact-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 60);
        });
    }

    animatedSections.forEach(section => {
        sectionAnimObserver.observe(section);
    });

    // Initialize - animate elements that are already visible on load
    function initVisibleAnimations() {
        animatedSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateSectionElements(section);
                sectionAnimObserver.unobserve(section);
            }
        });
    }

    // Run immediately and on load
    initVisibleAnimations();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const tabData = this.getAttribute('data-tab');
            if (tabData) {
                const cardapioSection = document.getElementById('cardapio');
                cardapioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                setTimeout(() => {
                    tabBtns.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.getAttribute('data-tab') === tabData) {
                            btn.classList.add('active');
                        }
                    });
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === tabData) {
                            content.classList.add('active');
                            animateTabContent(content);
                        }
                    });
                }, 500);
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const nome = formData.get('nome');
            const email = formData.get('email');
            const telefone = formData.get('telefone');
            const mensagem = formData.get('mensagem');
            
            const whatsappMessage = `Olá! Me chamo ${nome}.%0A%0AEmail: ${email}%0ATelefone: ${telefone}%0A%0AMensagem:%0A${mensagem}`;
            
            window.open(`https://wa.me/5561999099378?text=${whatsappMessage}`, '_blank');
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
            submitBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                this.reset();
            }, 3000);
        });
    }

    // Hero content fade in
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);
});
