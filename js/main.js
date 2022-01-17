const menuBtn = document.querySelector(".menu-btn")
const navItems = document.getElementById("nav-items")
const closeBtn = document.querySelector(".close-btn")



const showMobileNav = () => {
    navItems.classList.add('mobile')
    
}

const closeMobileNav = () => {
    navItems.classList.remove('mobile')
}

menuBtn.addEventListener('click', showMobileNav)
closeBtn.addEventListener('click', closeMobileNav)