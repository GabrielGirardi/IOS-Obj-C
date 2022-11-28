window.onload = function() {
    let menuBtn = document.querySelector('.menu');
    let menuOptions = document.querySelector('.menu-list');
    let logo = document.querySelector('.logo-apple');


    menuBtn.addEventListener("click", function() {
        menuOptions.classList.toggle("active");
        menuBtn.firstElementChild.classList.toggle("menu-opened")
        logo.classList.toggle("hide");
        menuBtn.classList.toggle("opened");

        
        if(menuOptions.classList.contains("active")) {
            menuBtn.firstElementChild.setAttribute('src', './assets/arrow-back.svg');
        } else {
            menuBtn.firstElementChild.setAttribute('src', './assets/menu-hambur.svg')
        }
    });
};
