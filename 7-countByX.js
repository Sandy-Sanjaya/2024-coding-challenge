// Hari ketujuh 2024 coding challange
// Count By X 
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i <= n; i++){
//         z.push(i * x); 
//     }
  
//     return z;
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x); 
console.log(countBy(2, 10 ))