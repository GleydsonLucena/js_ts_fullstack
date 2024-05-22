import './assets/css/style.css';

import { qnt, num, maiuscula, minuscula, simbolos, btn } from './modules/formCheckbox';
import geraSenha from './modules/geradores';

btn.addEventListener('click',
    e => {
        const senhaGerada = document.querySelector('.senha-gerada');
        if (!qnt.value) return senhaGerada.innerHTML = 'Informe uma Quantidade antes!'
        if (qnt.value < 4) return senhaGerada.innerHTML = 'Informe um valor maior que 4!'
        if (!num.checked && !maiuscula.checked && !minuscula.checked && !simbolos.checked ) return senhaGerada.innerHTML = 'Nenhum selecionado!';
        senhaGerada.innerHTML = geraSenha(qnt.value, maiuscula.checked, minuscula.checked, num.checked, simbolos.checked)
    })


