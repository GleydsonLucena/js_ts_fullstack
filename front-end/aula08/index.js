const nome = 'Gleydson Lucena';
const sobrenome = 'Guimarães'
let idade = 23;
let pesoEmKg = 84;
let alturaEmM = 1.72;
let imc = pesoEmKg / (alturaEmM * 2);
let data = new Date().getFullYear();
let nascimento = data - idade ;

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${pesoEmKg} Kg, tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)} `);

console.log(`${nome} ${sobrenome} nasceu em ${nascimento}.` )
