
//somar todos os numeros em um total geral
const numeros = [5,3,42,41,4,215415,1,23,1245543,3525,231412,5,3,4,1];

const total = numeros.reduce((acumulador,valor,indice,array)=>{

 acumulador= acumulador += valor;
 return acumulador;

},0 )//valor inicial do acumulador


console.log(total)

//retorne array com os pares
const par = numeros.reduce((acumulador,valor,indice,array)=>{

    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador
   
   }, [] )

console.log(par)