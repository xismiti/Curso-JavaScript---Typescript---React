

function criaFuncao(){
    const nome = 'luiz'
    return function(){
        return nome;
    }
}

const funcao = criaFuncao();
console.log(funcao);
//closure é a habilidade que a função tem de acessar seu escopo lexico