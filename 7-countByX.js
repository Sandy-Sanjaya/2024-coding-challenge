// Hari ketujuh 2024 coding challange
// Count By X 
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i <= n; i++){
//         z.push(i * x); 
//     }
  
//     return z;
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x); 
console.log(countBy(2, 10 ))