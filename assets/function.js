/**
 * Created by alexsewell on 8/16/18.
 */

$(document).ready(function () {
    $(".bistro-nav").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 2000);
    });

    $(".menu-nav").click(function() {
        $('html, body').animate({
            scrollTop: $(".menu-container").offset().top
        }, 2000);
    });

    $(".hours-nav").click(function() {
        $('html, body').animate({
            scrollTop: $(".hours-container").offset().top
        }, 2000);
    });
});

