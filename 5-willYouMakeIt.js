// Hari kelima 2024 coding challange
// Will you make it 
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    if (distanceToPump == mpg * fuelLeft){
//     return true; 
//    } else{
//     return false; 
//    }

// };

const zeroFuel = (d, m, f) => d <= m * f; 
console.log(zeroFuel(200, 50, 5)); 