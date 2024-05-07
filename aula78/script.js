// Superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta; 
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente!`)
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Agência/Conta: ${this.agencia}/${this.conta} Saldo:R$${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente! R$${this.saldo}`)
        return
    }
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupança(agencia, conta, saldo) {
    ContaCorrente.call(this, agencia, conta, saldo);
}

ContaPoupança.prototype = Object.create(ContaCorrente.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;



const cc = new ContaCorrente(11, 22, 0, 100);

cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log('##########')

const cp = new ContaCorrente(12, 33, 0);

cp.depositar(10);
cp.sacar(10);
cp.sacar(1);



