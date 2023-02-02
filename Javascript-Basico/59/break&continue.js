

const numeros = [1,2,3,4,5,6,7,8,9]

for(let i of numeros){

    if (i === 2){
        console.log('achou')
        continue;
    }// sempre que encontrar o numero 2 ele vai pular o elemento.

    console.log(i)


}

//o break ele para o codigo no instante que quisermos