//Superclasse
function Conta(agencia,conta,saldo){

    this.agencia = agencia;
    this.saldo = saldo;
    this.conta = conta;

}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
  };
  
  Conta.prototype.verSaldo = function() {
    console.log(
      `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
    );
  };

function ContaCorrente (agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo)
    this.limite=limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;


//sobreescrevendo o metodo sacar adicionando um atributo de limite permitindo sacar negativamente dentro do limite
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
}

const cc = new ContaCorrente(11,321,44,1000);
cc.sacar(1050)

console.log(cc)