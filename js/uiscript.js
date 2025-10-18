let teaTypes = document.querySelector(".tea-types-item")
let typesList = document.querySelector(".types-list")  
teaTypes.addEventListener("mouseover",()=>{
typesList.style.display="flex"
})
typesList.addEventListener("mouseleave",()=>{
typesList.style.display="none"
})






// let teaTypes = document.querySelector(".types-link");
// let typesList = document.querySelector(".types-list");

// teaTypes.addEventListener("mouseover", () => {
//     typesList.style.display = "flex";
// });

// teaTypes.addEventListener("mouseleave", () => {
//     typesList.style.display = "none";
// });

// // Additional event listeners to make dropdown more stable
// typesList.addEventListener("mouseover", () => {
//     typesList.style.display = "flex";
// });

// typesList.addEventListener("mouseleave", () => {
//     typesList.style.display = "none";
// });



// Simple dropdown functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const typesLink = document.querySelector('.types-link');
//     const typesList = document.querySelector('.types-list');
    
//     if (typesLink && typesList) {
//         typesLink.addEventListener('mouseenter', () => {
//             typesList.style.display = 'flex';
//         });
        
//         typesLink.addEventListener('mouseleave', () => {
//             // Small delay to prevent flickering when moving to dropdown
//             setTimeout(() => {
//                 if (!typesList.matches(':hover')) {
//                     typesList.style.display = 'none';
//                 }
//             }, 100);
//         });
        
//         typesList.addEventListener('mouseleave', () => {
//             typesList.style.display = 'none';
//         });
//     }
// });