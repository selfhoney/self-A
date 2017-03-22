
// top button
$(document).ready(function () {
    var pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});

