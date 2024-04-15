function random (min, max) {
    const r = Math.random() * (max - min) + max;
    return Math.floor(r);
} 

let rand = random(1, 50);

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand)
}

