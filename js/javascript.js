

'use strict'

/*
    * add event on element
*/

 const addEventOnElen = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
 }

 /*
 toggle navbar
 
 */

 const navbar = document.querySelector("[data-navbar]");
 const navbarLinks = document.querySelectorAll("[data-nav-link]");
 const navToggler = document.querySelector("[data-nav-toggler]");

 const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active")
 }

 addEventOnElen(navToggler, "click", toggleNavbar);

 const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
 }

 addEventOnElen(navbarLinks, "click", closeNavbar);