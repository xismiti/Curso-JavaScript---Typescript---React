

//declaração de função
function falaOi() {

    console.log('oi');

}

falaOi();

//first-class objects
//function expression
const souUmDado = function(){
    console.log('Sou um dado :D')
};

function executaFuncao(funcao){

    console.log('Vou executar sua função abaixo')
    funcao();
}

executaFuncao(souUmDado);

//Arrow Function

const arrow = () => {
    console.log('sou uma arrow function')
}
arrow();


//dentro de um objeto
const obj = {

    fala() {
        console.log('estou falando')
    }

}

obj.fala();