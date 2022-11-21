$(document).ready(function() {
    let showNextContent = $('.next-content');

    showNextContent.on('click', function () {
        $('.content-2').addClass('show');
    });
});