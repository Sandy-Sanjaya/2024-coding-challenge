// Hari pertama coding (Day 1) 
// Reduce but Grow 
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

// function grow(x){
//     let result = x[0]; 
//     for(i = 1; i < x.length; i++){
//         result *= x[i]; 
//     }
//     return result; 
// }

// console.log(grow([1, 2, 3, 4, 5])); 

// function grow(x){
//     const result = x.reduce((acc, curr) => acc * curr); 
//     return result; 
// }

// console.log(grow([5, 5, 5, 5, 5])); 

const grow = (x) => x.reduce((acc, curr) => acc * curr); 

console.log(grow([3, 4, 5, 6])); 

