document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('ul');

    mobileMenu.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
