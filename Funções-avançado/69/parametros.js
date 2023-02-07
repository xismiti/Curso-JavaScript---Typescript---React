// A função DECLARADA com a palavra Function tem uma variavel propria
// essa variavel "arguments" armazena todos os parametros, mesmo que eles não sejam requeridos. Como no caso do exemplo abaixo.
function funcao (){
    let total = 0;

    for(argumento of arguments){
        total+=argumento;
    }
    console.log(total);
}

funcao(1,2,3,4,5,6,7,8,4);

const conta = (operador, acumulador, ...numeros) => { //vai receber um operador um acumlador e todo o resto sera numeros. O REST SEMPRE DEVERA SER O ULTIMO

    for(let numero of numeros){

       if (operador === "+") acumulador += numero;
       if (operador === "-") acumulador -= numero;
       if (operador === "/") acumulador /= numero;
       if (operador === "*") acumulador *= numero;
    }
    console.log(acumulador)
};// é obrigatorio o ponto e virgula caso a função seja declarada em uma variavel
conta("*",1,20,32,453,54)