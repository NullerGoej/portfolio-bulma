$(document).ready(function() {
    // Initial class for the navbar
    var $navbar = $('.navbar');
    var navbarDefaultClass = 'transparent-navbar';
    var navbarFilledClass = 'filled-navbar';
    var scrollOffset = 100; // Adjust this value based on your design

    // Check scroll position and update the navbar class
    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollOffset) {
            $navbar.removeClass(navbarDefaultClass).addClass(navbarFilledClass);
        } else {
            $navbar.removeClass(navbarFilledClass).addClass(navbarDefaultClass);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});