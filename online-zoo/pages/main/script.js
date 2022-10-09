"use strict"

// make burger work

    const burgerBtn = document.getElementById('burger-menu');
    const burgerBackground = document.getElementById('burger__background__dark');
    // let burgerMenuOpened = document.getElementsByClassName('burger__background__white');
    const bodyBlocked = document.getElementById('body');
    const burgerBarTop = document.getElementById('burger-bar-top');
    const burgerBarMiddle = document.getElementById('burger-bar-middle');
    const burgerBarBottom = document.getElementById('burger-bar-bottom');
    console.log(burgerBtn)
burgerBtn.addEventListener('click', function(e) {
    burgerBackground.classList.toggle('open');
    bodyBlocked.classList.toggle('open');
    burgerBarTop.classList.toggle("open");
    burgerBarMiddle.classList.toggle('open');
    burgerBarBottom.classList.toggle('open')
})
burgerBackground.addEventListener('click', function(e){
    burgerBackground.classList.toggle('open');
    bodyBlocked.classList.toggle('open');
    burgerBarTop.classList.toggle("open");
    burgerBarMiddle.classList.toggle('open');
    burgerBarBottom.classList.toggle('open')
})