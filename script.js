const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu-icon");
const navContent = document.querySelector(".nav-content");
const allNavItems = document.querySelectorAll(".nav-item");
const subMenu = document.querySelectorAll(".sub-menu.collapsible");


const toggleMenu = () => {
    mobileMenu.classList.toggle("change")
    navContent.classList.toggle("showMenu")

    //if nav content contains the class showMenu, activate the overlay
    if(navContent.classList.contains("showMenu")){
        overlay.classList.add('active')
    } else {
        overlay.classList.remove('active')
    }
}

// check if the menu icon exists, if so, do toggleMenu when clicked
if(mobileMenu){
    mobileMenu.addEventListener("click", toggleMenu);
}


// show sub menu
subMenu.forEach((collapsible) => {
    collapsible.addEventListener("click", (e) => {
        collapsible.classList.toggle("active");

        const el = e.target;
        let img = el.querySelector("img");

        //if the sub menu link is clicked change the arrow icon
        if(el.classList.contains("active")){
            el.classList.remove("active");
            img.src = "./assets/icons/icon-arrow-down.svg"
        } else { 
            el.classList.add("active");
            img.src = "./assets/icons/icon-arrow-up.svg"
        }

        //close the current sub menu if/when another is clicked
        subMenu.forEach((otherCollapsible) => {
            if(otherCollapsible != collapsible){
                otherCollapsible.classList.remove("active")
            }
        })
    })
})
