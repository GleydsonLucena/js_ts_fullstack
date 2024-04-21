function* gerador1(){
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
    yield 'Valor 4'
    yield 'Valor 5'
    yield 'Valor 6'
}

const g1 = gerador1()

for (let valor of g1) {
    console.log(valor)
}
po