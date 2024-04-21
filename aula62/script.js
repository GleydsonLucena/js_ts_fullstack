function* gerador1(){
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
    yield 'Valor 4'
    yield 'Valor 5'
    yield 'Valor 6'
}

const g1 = gerador1()

function* gerador3() {
    yield 0;
    yield 1;
    yield 3;
}

function* gerador4 () {
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4();


function* geradora5() {
    yield ()=>{
        console.log('Vim do Y1')
    };

    yield ()=>{
        console.log('Vim do Y2')
    };

    yield ()=>{
        console.log('Vim do Y3')
    };
}

const g5 = geradora5();

const f1 = g5.next().value;
const f2 = g5.next().value;
const f3 = g5.next().value;