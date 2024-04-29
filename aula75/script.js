// new Object -> Object.prototype

const objA = 
{
    chaveA: 'A'
    // _proto_ => Object.prototype
};

const objB = 
{
    chaveB: 'B'
    // _proto_ => Object.prototype
};

Object.setPrototypeOf(objB, objA)

console.log(objA)
console.log(objB.chaveA)

