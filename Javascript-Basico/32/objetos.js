

const pessoa1 = {

    nome: 'Gui',
    sobrenome: 'Miranda',
    Idade: 23



}; // Declaração de um objeto

console.log(pessoa1.nome);//Forma de acessar os valores

function criaPessoa(nome,sobrenome,idade){


    return{

        nome,
        sobrenome,
        idade,
        fala(){
            console.log(`${this.nome} ${this.sobrenome} está falando oi...`) //Posso criar funções dentro de objetos, e para acessar seus atributos usasse o this e o atributo escolhido.
        }

    } //Retorna um objeto Pessoa, tornando assim o objeto mutavel. Uma forma Ok porem não tão eficiente. Chamada função factory

}
const pessoa2 = criaPessoa('CARLOS', 'CARLITO',12); //Criando uma variavel e jogando os argumentos dentro do obejto na função.

console.log(pessoa2.fala())

