const btn = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-menu');
const linkMenu = document.querySelectorAll('.link__menu');

function clearClassAnim() {
  menu.classList.remove('anim__menu');
  menu.classList.remove('anim__menu--out');
}

function openMenu() {
  clearClassAnim();
  if (menu && !menu.hasAttribute('data-menu')) {
    menu.setAttribute('data-menu', true);
    menu.classList.add('anim__menu');
    menu.addEventListener('animationend', () => {
      menu.setAttribute('data-menu', true);
    });
  } else {
    menu.classList.add('anim__menu--out');
    menu.addEventListener('animationend', () => {
      menu.removeAttribute('data-menu');
    });
    menu.classList.remove('anim__menu');
  }
}

btn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', openMenu);

if (linkMenu) {
  linkMenu.forEach((e) => {
    e.addEventListener('click', openMenu);
  });
}
