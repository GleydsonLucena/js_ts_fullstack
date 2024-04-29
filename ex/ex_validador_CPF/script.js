// 705.484.450-52 070.987.720-03

//replace(/\D+/g)
//Array.from(cpf)

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x

*/

const cpf = '705.484.450';
const cpfLimpo = cpf.replace(/\D+/g, '');

const multiplicadores = [10, 9, 8, 7, 6, 5, 4, 3, 2];

for (let i in cpfLimpo) {
    console.log();
}

console.log();
