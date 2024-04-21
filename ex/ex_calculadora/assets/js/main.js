// fUNÇÃO PARA PROTEGER O ESCOPO GLOBAL
(function global(){
    // CONSTANTES

    const numberCalc = document.querySelector('.numbers');

    // FUNÇÕES

    const cleanCalc=()=>{
        numberCalc.innerText = '';
    }

    const returnElement=(el)=>{
        let elValue = el.innerText;
        
        return elValue === 'C' ? cleanCalc() : numberCalc.innerText += elValue;
    }

    // EVENTOS
    document.addEventListener('click', (e)=>{
        const el = e.target; 

        if (el.innerText === returnElement(el)){}
        delet()
    });
})();