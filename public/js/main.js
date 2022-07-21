// Navbar change color
const navbar = document.querySelector('#navbar')
const navbarToggle = document.querySelector('#navbar-toggle')
const mobileMenu = document.querySelector('#mobile-menu')
const brandImg = navbar.firstElementChild.firstElementChild.firstElementChild
const navMenu = document.querySelectorAll('#navbar li a')

function NavbarToWhite() {
    navbar.classList.add('is-white')
    navbar.classList.replace('bg-transparent', 'bg-white')
    navbar.classList.add('shadow-md')
    navbarToggle.classList.replace('text-white', 'text-gray-500')
    brandImg.src = "../src/img/branding/logo-bo.png"
}
function NavbarToTransparent() {
    navbar.classList.remove('is-white')
    navbar.classList.replace('bg-white', 'bg-transparent')
    navbarToggle.classList.replace('text-gray-500', 'text-white')
    navbar.classList.remove('shadow-md')
    brandImg.src = "../src/img/branding/logo-wo.png"
}
function NavbarDesktopMenuToBlack() {
    navMenu.forEach(function(navA){
        navA.classList.replace('md:text-white', 'md:text-gray-700')
    })
}
function NavbarDesktopMenuToWhite() {
    navMenu.forEach(function(navA){
        navA.classList.replace('md:text-gray-700', 'md:text-white')
    })
}

navbarToggle.addEventListener("click", () => {
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
document.addEventListener("scroll", checkScroll)

function checkScroll() {
    if (window.scrollY >= 40 && !navbar.classList.contains('is-white')) {
        NavbarToWhite()
        NavbarDesktopMenuToBlack()
    }
    else if (window.scrollY < 40 && !mobileMenu.classList.contains('navbar-opened') && navbar.classList.contains('is-white')) {
        NavbarToTransparent()
        NavbarDesktopMenuToWhite()
    }
}

//initial check when entering the page
checkScroll()


// function breakWithHyphen(str) {
//     let strArr = []
//     for(let i =0; i<str.length; i++) {
//         strArr.push(str[i])
//         if (str[i] ==" ") continue
//         else strArr.push('&shy')
//     }
//     let strNew = strArr.join('')
//     return strNew
// }

// const brokenTexts = document.querySelectorAll('.break-hyphen')
// brokenTexts.forEach((brokenText) => {
//     let broken = brokenText.textContent
//     let strNew = breakWithHyphen(broken)
//     brokenText.innerHTML = strNew
// })