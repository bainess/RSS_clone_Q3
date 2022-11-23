'use strict';

function openBurgerMenu () {
  let burgerMenu = document.getElementById('burger-menu');
  let burgerLines = Array.from(document.getElementsByClassName('burger-lines'))
  let menuBackground = document.getElementById('burger-background');
  let menuList = document.getElementById('navigation');
  if (menuList.classList.contains('open')){
    burgerLines.forEach((el, i) => el.classList.remove('open'));
    menuBackground.classList.remove('open');
    menuList.classList.remove('open');
  } else {
    burgerLines.forEach((el, i) => el.classList.add('open'));
    menuBackground.classList.add('open');
    menuList.classList.add('open');
  }
    
} 
document.getElementById('burger-menu').addEventListener('click', openBurgerMenu);