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

        setTimeout(function () {
            let cardOne = $('.box.one');

            cardOne.addClass('show')
        }, 2000);

        $('.read.one').on('click', function () {
           let cardTwo = $('.box.two');

           cardTwo.addClass('show')

           $('.read.two').on('click', function () {
              let cardThree = $('.box.three');

              cardThree.addClass('show');           });
        });
    });
});

