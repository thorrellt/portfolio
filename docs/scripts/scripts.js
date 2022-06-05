import {Carousel} from './carousel.js';


/***************************
 * NAV BAR SCROLL CONTROLS
****************************/
var prevScrollpos = window.pageYOffset;
var navItems = document.querySelectorAll('.nav-item');
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    navItems.forEach(navItem => {
      navItem.classList.remove("show");
      navItem.classList.remove("hide");    
    });
    document.getElementById("nav-hamburger").classList.remove("hide");
    document.getElementById("nav-bar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}



/***************************
 * NAV BAR HAMBURGER TOGGLE
****************************/
$(document).ready(function () {
  $('.btn').click(function () {
      $('.nav-item').toggleClass("show");
      $('ul li').toggleClass("hide");
  });
});





