const menuButton = document.querySelector('#drop-features');
const menuList = document.querySelector('#menu-list-features');
const menuIcon = document.querySelector('#menu-down');


const menuButton2 = document.querySelector('#drop-company')
const menuList2 = document.querySelector('#menu-list-company')
const menuIcon2 = document.querySelector('#menu-down-2')


function toggleMenu1() {
    if (menuList.classList.contains("show")){
        menuList.classList.remove("show");
        menuIcon.setAttribute("src", './assets/images/icon-arrow-down.svg');
        menuButton.classList.remove("actived");
    } else {
        menuList.classList.add("show");
        menuList2.classList.remove("show");
        menuButton2.classList.remove("actived");
        menuIcon.setAttribute("src", './assets/images/icon-arrow-up.svg');
        menuIcon2.setAttribute("src", './assets/images/icon-arrow-down.svg');
        menuButton.classList.add("actived");
    }
}

function toggleMenu2 (){
    if (menuList2.classList.contains("show")){
        menuList2.classList.remove("show");
        menuIcon2.setAttribute("src", './assets/images/icon-arrow-down.svg');
        menuButton2.classList.remove("actived");
    } else {
        menuList2.classList.add("show");
        menuList.classList.remove("show");
        menuButton2.classList.remove("actived");
        menuIcon2.setAttribute("src", './assets/images/icon-arrow-up.svg');
        menuIcon.setAttribute("src", './assets/images/icon-arrow-down.svg');
        menuButton2.classList.add("actived");
    }
}

menuButton.addEventListener("click", toggleMenu1);
menuButton2.addEventListener("click", toggleMenu2);
