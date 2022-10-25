window.onload = function() {
    let menuBtn = document.querySelector('.menu');
    let menuOptions = document.querySelector('.menu-list');


    menuBtn.addEventListener("click", function() {
        if (menuOptions.hasClass = "active") {
            menuOptions.classList.remove("active");
        } else {
            menuOptions.classList.add("active");
        }
    });
};