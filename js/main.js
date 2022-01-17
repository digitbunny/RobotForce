const menuBtn = document.querySelector(".menu-btn")
const navItems = document.getElementById("nav-items")
const navItem = document.querySelectorAll(".nav-item")
const closeBtn = document.querySelector(".close-btn")



const showMobileNav = () => {
    navItems.classList.add('mobile');

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            navItems.classList.remove('mobile')
        })
    })
    
}

const closeMobileNav = () => {
    navItems.classList.remove('mobile')
}


menuBtn.addEventListener('click', showMobileNav)
closeBtn.addEventListener('click', closeMobileNav)