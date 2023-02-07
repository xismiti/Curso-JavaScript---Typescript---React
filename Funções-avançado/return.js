

function criaPessoa(nome, sobrenome){
    return{nome, sobrenome};

};

const p1 = criaPessoa('gui', 'schmidt');

console.log(p1);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco+ ' '+resto;
    }

    return falaResto;
}


function criaMultiplicador(multiplciador) {
    
    return function(n){
        return n * multiplciador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3)
console.log(duplica(2))
console.log(triplica(2))


