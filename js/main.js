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

    let nomeBtn = document.querySelector('.name')
    let textWelcome = document.querySelector('.welcome-text');


    nomeBtn.addEventListener("click", function() {
        let nome = prompt('Qual o seu nome?');

        let nomeRegistered = {nome}
        let nomeString = localStorage.getItem('nome');
        let nomeObj = JSON.parse(nomeString);


        localStorage.setItem('nome', JSON.stringify(nomeRegistered));
        nomeBtn.textContent = (nomeObj.nome);
    });

    setInterval(function () {
        let nomeString = localStorage.getItem('nome');
        let nomeObj = JSON.parse(nomeString);

        nomeBtn.textContent = (nomeObj.nome);

        if(nomeBtn = nomeObj) {
            textWelcome.textContent = ('Olá! ');
        }
    }, 300);
};
