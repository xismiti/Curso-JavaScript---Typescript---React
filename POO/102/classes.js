class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(this.nome + "esta falando.")
    }
    comer(){

    }
    beber(){

    }
}//diferente das factory functions os metodos ja vao automaticamente para o prototype.
