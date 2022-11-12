'use strict';

function openBurgerMenu () {
  let burgerMenu = document.getElementById('burger-menu');
  let burgerLines = Array.from(document.getElementsByClassName('burger-lines'))
  let menuBackground = document.getElementById('burger-background');
  let menuList = document.getElementsByTagName('nav')[0];
  burgerMenu.addEventListener('click', (e) => {
    burgerLines.forEach((el, i) => el.classList.toggle('open'));
    menuBackground.classList.toggle('open');
    menuList.classList.toggle('open');
    console.log(e)
  } )
} 
openBurgerMenu ();