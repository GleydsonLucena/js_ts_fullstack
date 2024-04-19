const adicionar = document.querySelector('.botao-adicionar');
const nomeTarefa = document.querySelector('#nome-tarefa');
const lista = document.querySelector('.lista');

// FUNCOES
const limpaInput=()=>{
    nomeTarefa.value = '';
    nomeTarefa.focus();
} 

const cirarElemento=(nomeElemento, classe)=>{
    const elemento = document.createElement(nomeElemento);
    elemento.classList.add(classe);

    return elemento;
}

const salvarTarefas=()=>{
    const todasTarefas = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for (tarefa of todasTarefas) {
        let tarefasTexto = tarefa.innerText;
        tarefasTexto = tarefasTexto.replace('Excluir', '')
        listaDeTarefas.push(tarefasTexto)
    }
    console.log(listaDeTarefas)
}

const adicionarTarefa=(nomeDaTarefa)=>{
    const lista = document.querySelector('.lista');
    const tarefa = cirarElemento('li', 'tarefas');
    const botao = cirarElemento('button', 'botao-tarefa');
    tarefa.innerText = nomeDaTarefa
    botao.innerText = 'Excluir'
    tarefa.appendChild(botao);
    lista.appendChild(tarefa);
    limpaInput();
    salvarTarefas();
}

// EVENTOS

nomeTarefa.addEventListener('keypress', (evento)=>{
    if (evento.keyCode === 13) {
        const nomeValue = nomeTarefa.value;
        if (!nomeValue) return;
        adicionarTarefa(nomeValue);
    }
})

adicionar.addEventListener('click', ()=> {
    const nomeValue = nomeTarefa.value;
    if (!nomeValue) return;

    adicionarTarefa(nomeValue);
})

document.addEventListener('click', (e)=>{
    const el = e.target;
    if (el.classList.contains('botao-tarefa')) {
        return el.parentNode.remove('.tarefas')
    }
})


