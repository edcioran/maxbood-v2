// Navbar change
let navbar = document.querySelector('#navbar')
    let navbarToggle = document.querySelector('#navbar-toggle')
    let mobileMenu = document.querySelector('#mobile-menu')
    let brandImg = navbar.firstElementChild.firstElementChild

    navbarToggle.addEventListener("click", function () {
        // When navbar is NOT expanded
        if (mobileMenu.classList.contains('hidden')) {
            navbar.classList.replace('bg-transparent', 'bg-white')
            navbarToggle.classList.replace('text-white', 'text-gray-500')
            brandImg.src = "../src/img/branding/logo-bo.png"
        }
        else {
            navbar.classList.replace('bg-white', 'bg-transparent')
            navbarToggle.classList.replace('text-gray-500', 'text-white')
            brandImg.src = "../src/img/branding/logo-wo.png"
        }

    })