const menuIcon = document.querySelector(".burger-menu");
const mobileMenu = document.getElementById('mobile-menu-list');

menuIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("hide");
    mobileMenu.classList.toggle("show");
})