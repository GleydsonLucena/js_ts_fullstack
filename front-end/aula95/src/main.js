import GeraCPF from "./modules/GeraCPF";
import './assets/css/style.css';

function oi () {
    const novoCPF = new GeraCPF();
    console.log(novoCPF.geraNovoCpf())
}
oi()