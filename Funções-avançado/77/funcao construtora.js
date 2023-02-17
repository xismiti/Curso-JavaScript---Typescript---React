//Função construtora retorna objetos
//Função fabrica retorna objetos
//Construtora precisamos iniciar com letra maiuscula e usar (new) para referenciar elas.


function Pessoa (nome, sobrenome) {

    const ID = 1231241;

    const metodoInterno = () => {


    }//formas de privar metodos e atributos dentro da função


    this.nome = nome
    this.sobrenome = sobrenome;
    this.metodo = () =>{
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa ('Luiz', 'Otavio');

p1.metodo();