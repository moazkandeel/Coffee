let navbar = document.querySelector(".navbar"),

    menuBtn = document.querySelector("#menu-btn")


    menuBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
    cartItems.classList.remove("active")
    searchContainer.classList.remove("active")
})

let cartItems = document.querySelector(".cart-items-container"),

    cartBtn = document.querySelector("#cart-btn");


cartBtn.addEventListener("click", ()=>{
    cartItems.classList.toggle("active")
    navbar.classList.remove("active")
    searchContainer.classList.remove("active")
})


let searchContainer = document.querySelector(".search-form"),

    searchBtn = document.querySelector("#search-btn");


searchBtn.addEventListener("click", ()=>{
    searchContainer.classList.toggle("active")
    navbar.classList.remove("active")
    cartItems.classList.remove("active")
})

window.onscroll = ()=>{
    navbar.classList.remove("active")
    cartItems.classList.remove("active")
    searchContainer.classList.remove("active")
    
}