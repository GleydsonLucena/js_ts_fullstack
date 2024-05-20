import GeraCPF from "./modules/GeraCPF";
import './assets/css/style.css';

function append() {
    const cpf = new GeraCPF();
    const div = document.querySelector('.cpf-gerado');
    div.innerHTML = cpf.geraNovoCpf()
}
append()

