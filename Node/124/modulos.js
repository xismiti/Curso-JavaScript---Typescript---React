/* const nome = "luiz";
const sobrenome = "miranda"
const falaNome = () => {
    console.log(nome, sobrenome)
}

exports.nome = nome;
exports.sobrenome = sobrenome;
console.log(exports)
 */

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;//na chave pessoa vai ter a classe pessoa