import { geraSenha } from "./geradores";

document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
})

export const qnt = document.querySelector('#qnt-caracters');
export const num = document.querySelector('#num');
export const maiuscula = document.querySelector('#maiusculas');
export const minuscula = document.querySelector('#minusculas');
export const simbolos = document.querySelector('#simbolos');

export const btn = document.querySelector('.btn');
