let teaTypes = document.querySelector(".tea-types-item")
let typesList = document.querySelector(".types-list")  
teaTypes.addEventListener("mouseover",()=>{
typesList.style.display="flex"
})
typesList.addEventListener("mouseleave",()=>{
typesList.style.display="none"
})