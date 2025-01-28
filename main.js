let menuIcon = document.querySelector('#menu_icon');
let menu = document.querySelector('#menu');
let exit = document.querySelector('#exit');
let temaIcon = document.querySelector('#Tema');

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    menu.classList.toggle('mostrar');
});

exit.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    menuIcon.style.display = 'block';
});

// Tema
temaIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});