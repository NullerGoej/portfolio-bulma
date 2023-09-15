$(document).ready(function() {
    var $navbar = $('.navbar');
    var navbarDefaultClass = 'transparent-navbar';
    var navbarFilledClass = 'filled-navbar';
    var scrollOffset = 100;

    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollOffset) {
            $navbar.removeClass(navbarDefaultClass).addClass(navbarFilledClass);
        } else {
            $navbar.removeClass(navbarFilledClass).addClass(navbarDefaultClass);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});