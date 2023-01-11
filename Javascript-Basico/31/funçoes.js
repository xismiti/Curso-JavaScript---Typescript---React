


function saudacao(name){

    return `Salve ${name}`; //Com return a função retorna o valor declarado


}

const variavel = saudacao('CARLOS');// Assim o resultado da função sera salvo na variavel

console.log(variavel); // assim vai exibir o valor da função

function soma (x,y){

    const resultado = x + y;

    return resultado;
}

console.log(soma(2,2))


//Podemos declarar funcões em variaveis (Funçoes anonimas)
const raiz = function(n){

    return n**0.5;



};//Sempre que executar isso é OBRIGATORIO o ponto e virgula no fim do blocoda função

console.log(raiz(9))

const raizArrow = n => n ** 0.5; //exemplo de arrow function com um paramento e uma linhad e codigo

const divisao = (x,y) =>{

    const result = x/y;

    return result

}
console.log(divisao(4,2))