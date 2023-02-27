class Dispositivo{
    constructor (nome){
        this.nome = nome;
        this.ligado = false;

    }
    ligar(){
        if (this.ligado){
            console.log('Ja esta ligado!')
            return
        }
        this.ligado = true;
    }
    desligar(){
        if (!this.ligado){
            console.log('esta desligado')
            return
        }
        this.ligado = false;

    }   
}

class Smartphone extends Dispositivo{ //forma de herdar uma classe
    
    constructor(nome , cor){
        super(nome); //forma de chamar o construtor da classe pai
        this.cor=cor;
    }

}