// NeuronOS Website Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile navigation toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        if (!header) return;
        
        // Check if mobile nav already exists
        if (document.querySelector('.mobile-nav-toggle')) return;
        
        const nav = header.querySelector('nav');
        if (!nav) return;
        
        // Create mobile nav toggle button
        const mobileNavToggle = document.createElement('button');
        mobileNavToggle.classList.add('mobile-nav-toggle');
        mobileNavToggle.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;
        
        // Add mobile nav toggle button to header
        header.querySelector('.container').appendChild(mobileNavToggle);
        
        // Add mobile nav class to nav
        nav.classList.add('mobile-nav');
        
        // Toggle mobile nav on button click
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
                mobileNavToggle.classList.remove('active');
                nav.classList.remove('active');
            }
        });
        
        // Close mobile nav when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    };
    
    // Add mobile nav on small screens
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            createMobileNav();
        }
    };
    
    // Initial check
    handleResize();
    
    // Check on resize
    window.addEventListener('resize', handleResize);
    
    // Add styles for mobile nav
    const addMobileNavStyles = () => {
        // Check if styles already exist
        if (document.querySelector('#mobile-nav-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'mobile-nav-styles';
        style.textContent = `
            @media (max-width: 768px) {
                header .container {
                    position: relative;
                }
                
                .mobile-nav-toggle {
                    display: block;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1000;
                }
                
                .mobile-nav-toggle .bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    margin: 5px auto;
                    background-color: var(--light-text);
                    transition: all 0.3s ease;
                }
                
                .mobile-nav-toggle.active .bar:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                
                .mobile-nav-toggle.active .bar:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-nav-toggle.active .bar:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }
                
                .mobile-nav {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: var(--darker-bg);
                    padding: 20px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                    display: none;
                    z-index: 999;
                }
                
                .mobile-nav.active {
                    display: block;
                }
                
                .mobile-nav ul {
                    flex-direction: column;
                    align-items: center;
                }
                
                .mobile-nav ul li {
                    margin: 10px 0;
                }
            }
        `;
        
        document.head.appendChild(style);
    };
    
    // Add mobile nav styles
    addMobileNavStyles();
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    const highlightNavLink = () => {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    // Add active link styles
    const addActiveLinkStyles = () => {
        // Check if styles already exist
        if (document.querySelector('#active-link-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'active-link-styles';
        style.textContent = `
            nav ul li a.active {
                color: var(--primary-color);
                font-weight: bold;
            }
        `;
        
        document.head.appendChild(style);
    };
    
    // Add active link styles
    addActiveLinkStyles();
    
    // Highlight active nav link on scroll
    window.addEventListener('scroll', highlightNavLink);
    
    // Initial highlight
    highlightNavLink();
});
