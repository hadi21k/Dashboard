const option = document.querySelector(".option");
const menu = document.querySelector(".option-menu");
const main = document.querySelector("main");
option.addEventListener("click" , ()=>{
    menu.classList.toggle("active");
    main.classList.toggle("set")
})