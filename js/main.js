window.onload = function() {
    let menuBtn = document.querySelector('.menu');
    let menuOptions = document.querySelector('.menu-list');
    let logo = document.querySelector('.logo-apple');


    menuBtn.addEventListener("click", function() {
        menuOptions.classList.toggle("active");
        logo.classList.toggle("hide");
        menuBtn.classList.toggle("opened");
        
        if(menuOptions.classList.contains("active")) {
            menuBtn.firstElementChild.setAttribute('src', './assets/close-hambur.png')
        } else {
               menuBtn.firstElementChild.setAttribute('src', './assets/menu-hambur.png')
        };
    });
};
