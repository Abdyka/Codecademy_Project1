var main = function () {
    $('.notification img').click(function () {
        $('.notification-menu').toggle();
    });
    $('.btn').click(function () {
        $(this).toggleClass('btn-like', 1000);
    });
};

$(document).ready(main);
