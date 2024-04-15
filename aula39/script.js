function random (min, max) {
    const r = Math.random() * (max - min) + max;
    return Math.floor(r);
} 
let min = 1;
let max = 50;
let rand = 10;

// while (rand !== 10) {
//     rand = random(1, 50);
//     console.log(rand)
// }

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);



