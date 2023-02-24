
 function Pessoa (nome,sobrenome){
    
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

 }

Pessoa.prototype.nomeCompleto() = () =>{
    return this.nome + ' ' + this.sobrenome;
}

 const pessoa1 = new Pessoa('luiz','carlos');
 const data = new Date();

 //prototype é otimo para colocar metodos que vao ser usados varias vezes por diferentes objetos, é uma forma de deixar a aplicação mais leve ja que objetos que não usar o metodo n o possuem em suas chaves.