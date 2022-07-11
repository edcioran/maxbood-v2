// Navbar change color
let navbar = document.querySelector('#navbar')
let navbarToggle = document.querySelector('#navbar-toggle')
let mobileMenu = document.querySelector('#mobile-menu')
let brandImg = navbar.firstElementChild.firstElementChild

function NavbarToWhite() {
    navbar.classList.replace('bg-transparent', 'bg-white')
    navbar.classList.add('shadow-sm')
    navbarToggle.classList.replace('text-white', 'text-gray-500')
    brandImg.src = "../src/img/branding/logo-bo.png"
}
function NavbarToTransparent() {
    navbar.classList.replace('bg-white', 'bg-transparent')
    navbarToggle.classList.replace('text-gray-500', 'text-white')
    brandImg.src = "../src/img/branding/logo-wo.png"
}

navbarToggle.addEventListener("click", function () {
    // When navbar is NOT expanded
    if (!mobileMenu.classList.contains('navbar-opened')) {
        NavbarToWhite();
        mobileMenu.classList.add('navbar-opened')
    }
    else {
        if(window.scrollY<40) NavbarToTransparent()
        mobileMenu.classList.remove('navbar-opened')
    }
})

// Navbar change color when scrolling
document.addEventListener("scroll", function () {
    if (window.scrollY >= 40) NavbarToWhite()
    else if (window.scrollY < 40 && !mobileMenu.classList.contains('navbar-opened')) NavbarToTransparent()
})