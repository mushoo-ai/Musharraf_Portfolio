const links = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();
links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


const main = document.querySelector('main');

  // Add fade-in animation on page load
  window.addEventListener('DOMContentLoaded', () => {
    main.classList.add('fade-in');
  });

  // Animate fade-out only when internal links are clicked
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href);
    const isSameOrigin = url.origin === location.origin;
    const isInternalPage = !url.hash && url.pathname !== location.pathname;

    if (isSameOrigin && isInternalPage) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        main.classList.remove('fade-in');
        main.classList.add('fade-out');

        setTimeout(() => {
          window.location.href = link.href;
        }, 500); // Match transition time
      });
    }
  });