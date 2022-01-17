const menuBtn = document.querySelector(".menu-btn")
const navItems = document.querySelector(".nav-items")
const closeBtn = document.querySelector(".close-btn")



const showMobileNav = () => {
    navItems.style.display = "flex"
    
}

const closeMobileNav = () => {
    navItems.style.display = "none"
}

menuBtn.addEventListener('click', showMobileNav)
closeBtn.addEventListener('click', closeMobileNav)