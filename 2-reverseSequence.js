// Hari kedua 2024 coding challange
// Reserve Sequence 
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

// const reverseSeq = n => {
//     const result = []; 
//     for(let i = n; i >= 1; i--){
//         result.push(i); 
//     }
//     return result;
// };

// const reverseSeq = n => Array(n).fill().map((el, i) => i+1 ).reverse();  
    // return [..Array(n)] = Array(n).fill(); 

const reverseSeq = n => Array(n).fill().map((el, i) => n - i ); 
console.log(reverseSeq(8));