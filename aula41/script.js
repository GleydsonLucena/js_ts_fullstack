const maiorNumero=(a=0, b=0) => {
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    }
}

console.log(maiorNumero(12, 52))