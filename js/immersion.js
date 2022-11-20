$(document).ready(function() {
    setTimeout(function () {
        let dialog = $('.welcome-text');

        dialog.addClass('show');
    }, 400);

    let buttonNext = $('.button-next');

    buttonNext.on('click', function () {
        let dialog = $('.dialog-2');

        dialog.addClass('show');
        buttonNext.toggle();
    });
});

