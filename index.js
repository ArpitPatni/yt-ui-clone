const menu=document.querySelector('#menu')
const sideBar=document.querySelector(".sidebar")

menu.addEventListener("click",function(){
    sideBar.classList.toggle("show-sidebar")
})