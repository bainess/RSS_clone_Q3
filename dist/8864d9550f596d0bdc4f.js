'use strict';

function openBurgerMenu() {
  var burgerMenu = document.getElementById('burger-menu');
  var burgerLines = Array.from(document.getElementsByClassName('burger-lines'));
  var menuBackground = document.getElementById('burger-background');
  var menuList = document.getElementById('navigation');
  burgerMenu.addEventListener('click', function (e) {
    burgerLines.forEach(function (el, i) {
      return el.classList.toggle('open');
    });
    menuBackground.classList.toggle('open');
    menuList.classList.toggle('open');
    console.log(e);
  });
}
openBurgerMenu();