const pontuacaoUsuario = 1000;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

// (condição) ? 'valor verdadeiro' : 'valor falso';

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario)

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)