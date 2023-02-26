

function criaPessoa (nome,sobrenome){
    const pessoaPrototype ={
        falar(){
            console.log('esta faladno')
        }
    }
    return{
        nome,
        sobrenome
    };
}
const p1 = criaPessoa('luiz', 'otavio')