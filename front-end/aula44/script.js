function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números')
    }

    return x + y;
}
try {
    console.log(soma(5, 8))
    console.log(soma(5, '8'))
} catch (err) {
    console.log('Alguma coisa')
}
