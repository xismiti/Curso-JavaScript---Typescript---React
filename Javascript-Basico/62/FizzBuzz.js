


function fizzBuzz(numero){

    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';// se o resto da divisao por 3 for zero e o resto da divisao por 5 for 0 retorna Fizz.
    if (numero % 3 === 0) return 'Fizz'; // se o resto da divisao por 3 for zero retorna Fizz.
    if (numero % 5 === 0) return 'Buzz'; // se o resto da divisao por 3 for zero retorna Fizz.
    return numero; // se nenhuma das condições forem true só retorna o numero

}

for(let i = 0; i <=100; i++){
    console.log(i, fizzBuzz(i))
}