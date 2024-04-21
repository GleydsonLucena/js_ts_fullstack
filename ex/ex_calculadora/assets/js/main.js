// fUNÇÃO PARA PROTEGER O ESCOPO GLOBAL
(function global(){
 
// FUNÇÕES

    function criaCalculadora() {
        return {
            display: document.querySelector('.numbers'),

            calculation() {
                let conta = this.display.innerText;
                
                try {
                    conta = eval(conta);

                    if (!conta) {
                        alert('Conta inválida!');
                        return;
                    }

                } catch (e) {
                    alert('Conta inválida!');
                    return;
                }
            },

            deleteOne() {
                this.display.innerText = this.display.innerText.slice(0, -1);
            },

            cleanCalc() {
                this.display.innerText = '';
            },

            returnElement(el){
                if (el.classList.contains('caracters')) {
                    const elValue = el.innerText;
                    if (elValue === 'C') {
                        return calculadora.cleanCalc()
                     } else if (elValue === '=') {
                        this.calculation();
                     }
                     return this.display.innerText += elValue;
                };
            }
        }
    }

    const calculadora = criaCalculadora();

// EVENTOS

    document.addEventListener('click', (e)=>{
        const el = e.target;
        if (el.classList.contains('delet')) {
            calculadora.deleteOne();
        }
        if (el.innerText === calculadora.returnElement(el)){}
    });
})();