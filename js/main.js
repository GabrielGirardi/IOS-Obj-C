window.onload = function() {
    let menuBtn = document.querySelector('.menu');
    let menuOptions = document.querySelector('.menu-list');


    menuBtn.addEventListener("click", function() {
        menuOptions.classList.toggle("active");
    });
};
