const menuButton = document.querySelector("#menu-mobile");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll("nav a");
const icon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");
    overlay.classList.toggle("active");

    if(nav.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

overlay.addEventListener("click", fecharMenu);

links.forEach(link=>{
    link.addEventListener("click", fecharMenu);
});

function fecharMenu(){

    nav.classList.remove("active");
    overlay.classList.remove("active");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

}