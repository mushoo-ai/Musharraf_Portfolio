document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    
    // Toggle menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    }
    
    // Highlight current page
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Course preview / interactions ---
    // Wire 'View Course' buttons to navigate to the dedicated page
    document.querySelectorAll('.view-course').forEach(btn => {
        btn.addEventListener('click', function() {
            const href = this.dataset.href;
            if (href) location.href = href;
        });
    });

    // Prevent right-click and common save shortcuts on preview videos
    document.querySelectorAll('video').forEach(v => {
        // already set oncontextmenu inline, but ensure here as well
        v.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    });

    // Block Ctrl/Cmd+S to make saving the page harder (not foolproof)
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === 's') {
            e.preventDefault();
        }
    });

    // --- Computer Networks page: language toggle & protections ---
    const mainVideo = document.getElementById('main-video');
    if (mainVideo) {
        // Language buttons swap the source and immediately load+play
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const src = this.dataset.src;
                if (!src) return;
                // Update active state
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Swap source
                const sourceEl = document.getElementById('video-source');
                if (sourceEl) {
                    sourceEl.setAttribute('src', src);
                    // Reload video
                    try {
                        mainVideo.load();
                        mainVideo.play().catch(() => {});
                    } catch (err) {
                        console.warn('Video load/play failed', err);
                    }
                }
            });
        });

        // extra protection: disable right-click on the player and video element
        [mainVideo].forEach(v => {
            v.addEventListener('contextmenu', function(e) { e.preventDefault(); });
        });
    }
});
