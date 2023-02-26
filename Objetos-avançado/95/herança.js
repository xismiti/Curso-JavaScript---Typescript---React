

function Produto(nome,preço){

    this.nome =nome;
    this.preço = preço;
}

Produto.prototype.aumento = (quantia) =>{
    this.preço += quantia
}
Produto.prototype.desconto =(quantia) =>{
    this.preço -=quantia;
}

function Camiseta (nome, preco, cor ){
    Produto.call(this,nome, preco)//forma de herdar
    this.cor = cor;
}


Camiseta.prototype = Object.create(Produto.prototype)//linkando os prototypes e com isso tendo acesso aos metodos desconto e aumento.
Camiseta.prototype.constructor = Camiseta;//setando o construtor do prototype corretamente, anteriormente ele era Produto.



const camiseta = new Camiseta('Regata', 1.3, 'preta');

