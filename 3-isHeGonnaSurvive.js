// Hari ketiga 2024 coding challange
// is He Gonna Survive?
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// function hero(bullets, dragons){
//     if(bullets/2 >= dragons){
//         return true; 
//     } else {
//         return false; 
//     }
// }

// function hero(bullets, dragons){
//     return (bullets/2 >= dragons);  
// }

const hero = (bullets, dragons) => bullets >= dragons * 2; 
console.log(hero(150, 60)); 
