document.getElementsByClassName('nav-dropdown');
var els_nav = document.getElementsByClassName('nav-dropdown');
Array.prototype.forEach.call(els_nav, (el) => {
    el.addEventListener('click', () => {
        el.nextSibling.nextSibling.classList.toggle('submenu-hidden');
    })
});