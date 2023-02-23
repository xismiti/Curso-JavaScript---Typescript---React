
function Produto(nome,preco,estoque){

    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {

        enumerable:true,//quero que ele apareça? / mostra a chave
        value:estoque,//que valor vai receber?
        writable:false,//posso editar o seu valor?
        configurable:false //pode apagar a chave ou reconfigarar? 

    })
    Object.defineProperties(this, {

        nome:{
            enumerable:true,//quero que ele apareça? / mostra a chave
            value:estoque,//que valor vai receber?
            writable:false,//posso editar o seu valor?
            configurable:false //pode apagar a chave ou reconfigarar?  

        },
        preco:{
            enumerable:true,//quero que ele apareça? / mostra a chave
            value:estoque,//que valor vai receber?
            writable:false,//posso editar o seu valor?
            configurable:false //pode apagar a chave ou reconfigarar? 

        }
    })


}