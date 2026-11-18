document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const isOpen = navLinks.classList.contains('show');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.textContent = isOpen ? '✕' : '☰';
        });

        // Close mobile nav when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                navToggle.textContent = '☰';
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

    function highlightNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (contactForm && toast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('hoten').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('noidung').value.trim();

            if (!name || !email || !message) {
                alert('Vui lòng điền đầy đủ các thông tin bắt buộc.');
                return;
            }

            // Show toast notification
            toast.textContent = `Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công.`;
            toast.classList.add('show');

            contactForm.reset();

            setTimeout(() => {
                toast.classList.remove('show');
            }, 4500);
        });
    }
});
