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