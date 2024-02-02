// Hari keempat 2024 coding challange
// Sentence Smash
// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash (words) {
//     return words.join(" "); 
// };

// const smash = (words) => words.join(" "); 

function smash (words) {
    let result = ""; 
    for(i = 0; i < words.length; i++){
        result = result + words[i]; 
    if(i != words.length - 1){
        result = result + " "; 
    }
    }
    return result; 
}


console.log(smash(["this", "is", "a", "really", "long", "sentence"])); 