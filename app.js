
// Get the header
var header = document.getElementById("header");
var navigation = document.querySelector('#header__nav-list-first');
var logo = document.querySelector('.header__logo');
var changeColor = document.querySelector('.header__nav-list-last-change');
var changeColorIcon = document.querySelector('.header__nav-list-last-change-icon');
var borderLogin = document.querySelector('.header__nav-item-last-login');
var scrollInput = document.querySelector('.header__input-scroll');
var sectionNav = document.querySelector('.header__section-list');
var headerUnderLine = document.querySelectorAll('.header__nav-item-line');
var headerLine = document.querySelector('header__nav-item--active')
// var colorIconTablet = document.getElementById("header__nav-logo-tablet")
// Get the offset position of the navbar
var sticky = header.offsetTop;
var x = screen.width
console.log(x);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.setAttribute('style', 'height: 80px');
    navigation.setAttribute('style', 'display:none');
    logo.setAttribute('style', 'color: #eb2cb1');
    changeColor.setAttribute('style', 'color: black');
    changeColorIcon.setAttribute('style', 'color: black');
    borderLogin.setAttribute('style', 'border: 1px solid #ebebeb; box-shadow: 0 0 1px 1px #ebebeb');
    scrollInput.setAttribute('style', 'display: flex');
    sectionNav.setAttribute('style', 'display: none');
    // colorIconTablet.classList.add('color-logo', 'none');
  } else {
    header.classList.remove("sticky");
    navigation.setAttribute('style', 'display:flex');
    logo.setAttribute('style', 'color: white');
    changeColor.setAttribute('style', 'color: white');
    changeColorIcon.setAttribute('style', 'color: white');
    borderLogin.setAttribute('style', 'border: transparent')
    scrollInput.setAttribute('style', 'display: none');
    sectionNav.setAttribute('style', 'display: flex');
    // colorIconTablet.classList.remove('color-logo', 'none')
  }
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};