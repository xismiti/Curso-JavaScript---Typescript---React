
//retorne a soma do dobro de todos os pares
// -> filtrar pares
// dobrar os valores
// reduzir (somar tudo);

const numeros = [5,3,42,41,4,215415,1,23,1245543,3525,231412,5,3,4,1];

const pares = numeros.filter((i)=> (i % 2 === 0))
const dobro = pares.map((i) => i * 2);
const total = dobro.reduce((acumulador,valor) => {

    acumulador = acumulador += valor;
    return acumulador
},0)

console.log(total)