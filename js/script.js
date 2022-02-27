

function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background= color;
}
function menuToggle(){
    const  toggleMenu = document.querySelector('.toggleMenu' );
    toggleMenu.classList.toggle('active')
}

let burger = document.querySelector('#open');
let navUl = document.querySelector('#list');



burger.addEventListener('click', burgerF);

function burgerF(){
    navUl.classList.toggle('show');
}