const adicionar = document.querySelector('.botao-adicionar');
const nomeTarefa = document.querySelector('#nome-tarefa');

// FUNCOES 

const cirarElemento=(nomeElemento, classe)=>{
    const elemento = document.createElement(nomeElemento);
    elemento.classList.add(classe);

    return elemento;
}

const adicionarTarefa=(nomeDaTarefa)=>{
    const lista = document.querySelector('.lista');
    const div = cirarElemento('div', 'div-tarefa');
    const tarefa = cirarElemento('li', 'tarefas');
    tarefa.innerText = nomeDaTarefa
    const botao = cirarElemento('button', 'botao-tarefa');
    botao.innerText = 'Excluir'
    div.appendChild(tarefa);
    div.appendChild(botao);
    lista.appendChild(div);
}

const excluirTarefa=()=>{
    const tarefaRemovida = document.querySelector('.div-tarefa');
    const classInvisivel = tarefaRemovida.classList.replace('div-tarefa', 'invisivel');

    return classInvisivel;
}

// EVENTOS

adicionar.addEventListener('click', ()=> {
    const nomeValue = nomeTarefa.value;

    adicionarTarefa(nomeValue);
    
})

const botaoExcluir = document.querySelector('.botao-tarefa');

botaoExcluir.addEventListener('click', ()=>{
    excluirTarefa();
})
