// Hari keenam 2024 coding challange
// DNA to RNA 
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function DNAtoRNA(dna) {
//     let rna = ""; 
//     for(let i = 0; i < dna.length; i++){
//         // if(dna[i] === "T"){
//         //     rna += "U";  
//         // } else {
//         //     rna += dna[i]; 
//         // }
//         rna += dna[i] === "T"? "U" : dna[i]; 
//     }

//     return rna; 
// }

// const DNAtoRNA = (dna) => dna
//     .split("") 
//     .map((el) => (el === "T" ? "U" : el))
//     .join(""); 

// const DNAtoRNA = (dna) => dna.replace("/T/g", "U"); 

// const DNAtoRNA = (dna) => dna.replaceAll("T", "U"); 

const DNAtoRNA = (dna) => dna.split("T").join("U"); 

console.log(DNAtoRNA("TTTT")); 