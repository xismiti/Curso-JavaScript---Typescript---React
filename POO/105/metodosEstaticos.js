class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume =0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -=2;
    }

    //metodo estatico, ele executa sem precisar de uma instancia
    static trocaPilha () {

    }
}


const controle = new ControleRemoto('LG');

controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

ControleRemoto.trocaPilha(); //forma de acessar um metodo estatico

console.log(controle)