let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

varA = varB;
varB = varA;
varC = varC;

console.log(varA, varB, varC);