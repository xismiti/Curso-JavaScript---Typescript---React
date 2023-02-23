
function Produto(nome,preco,estoque){

    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    
    Object.defineProperty(this, 'estoque', {

        enumerable:true,//quero que ele apareça? / mostra a chave
        value:estoque,//que valor vai receber?
        writable:false,//posso editar o seu valor?
        configurable:false, //pode apagar a chave ou reconfigarar? 
        get: function(){ return estoquePrivado;},
        set: (valor) => {
            estoquePrivado=valor;
        }

    })
 

}
const p1 = new Produto('camiseta',20,3)
console.log(p1)