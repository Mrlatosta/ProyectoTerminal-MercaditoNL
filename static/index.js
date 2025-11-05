
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('overlay');
        const navLinks = document.querySelectorAll('.nav-link, .cta-button');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
