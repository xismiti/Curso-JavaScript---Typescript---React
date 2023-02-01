for (let i = 0; i <= 10; i++) {

    const par = i % 2 === 0 ? 'par' : 'impar';// Se i dividido pra 2 tiver resto zero e retornar true, retorna 'par' caso retorne false 'impar'
    console.log(i,par)

}



//percorrer um array com for

const frutas =['Maçã', 'Pera', 'Uva', 'Otavio', 'Joao', 'Miranda'];

for (let i = 0; i < frutas.length; i++){

    console.log(`Indice ${i}`,frutas[i])

} 
