function random (min, max) {
    const r = Math.random() * (max - min) + max;
    return Math.floor(r);
} 
const min = 1;
const max = 10;
let rand = random(min, max);

console.log(rand)

