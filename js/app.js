// js/app.js

function loadNavbar() {
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
            
            // Mobile Menu Logic
            const trigger = document.querySelector('.mobile-menu-trigger');
            const links = document.querySelector('.navbar__links');
            
            if (trigger && links) {
                trigger.addEventListener('click', () => links.classList.toggle('active'));
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
});