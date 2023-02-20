const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu-icon");
const navContent = document.querySelector(".nav-content");
const allNavItems = document.querySelectorAll(".nav-item");
const subMenu = document.querySelectorAll(".nav-links li.sub-menu");

const toggleMenu = () => {
    mobileMenu.classList.toggle("change")
    navContent.classList.toggle("showMenu")

    if(navContent.classList.contains("showMenu")){
        overlay.classList.add('active')
    } else {
        overlay.classList.remove('active')
    }
}

// check if the menu icon exists, if so, do the addEventListener
if(mobileMenu){
    mobileMenu.addEventListener("click", toggleMenu);
}

// close menu when clicking link
allNavItems.forEach((navItem) => navItem.addEventListener("click", toggleMenu))

// show sub menu
subMenu.forEach(el => el.addEventListener('click', showSubMenu))
console.log(subMenu)


function showSubMenu(e){
    const el = e.target;

    let img = el.querySelector("img");
    console.log("img", img)
    if(el.classList.contains("active")){
        el.classList.remove("active");
        img.src = "./assets/icon-arrow-down.svg"
    } else { 
        el.classList.add("active");
        img.src = "./assets/icon-arrow-up.svg"
    }
}