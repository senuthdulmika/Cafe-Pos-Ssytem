window.navigate = function(pageId, element) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link-custom');

    // Hide all pages and display only the relevant page
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');

    // Change the active status in the sidebar
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
};

window.updateTime = function() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('live-time').innerText = timeString;
};