"use strict";

var burger = document.getElementById('burger');
var ul = document.querySelector('nav ul');
burger.addEventListener('click', function () {
  burger.classList.toggle('show-x');
  ul.classList.toggle('show');
});