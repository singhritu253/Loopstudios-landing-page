const mobileNav = document.querySelector(".menu");
const navHeader = document.querySelector(".navbar")

const toggleNavbar = () =>{
    navHeader.classList.toggle("active");
};

mobileNav.addEventListener('click' , () => toggleNavbar());
