const menuOpenBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.navigation');

menuOpenBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);


function openMenu(e) {
    menu.style.display = 'flex';
}
function closeMenu(e) {
    if(e.target.nodeName !== 'A' && e.target.nodeName !== 'BUTTON') return;

    menu.style.display = 'none';
}