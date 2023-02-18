

function* geradora1(){
    //codigo qualquer
    yield 'valor 1' // na primeira vez que chamar ela vai retorna esse valor
    //codigo qualquer
    yield 'valor 2' // na segunda vez que chamar ela vai retorna esse valor
    //codigo qualquer
    yield 'valor 3'// na terceira vez que chamar ela vai retorna esse valor
}

const g1 = geradora1();
console.log(g1.next().value)//valor 1
console.log(g1.next().value)//valor 2
console.log(g1.next().value)//valor 3

//Gerador infinito


const g2 = geradora2();

function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++
    }
}
console.log(g2.next().value)//valor 1
console.log(g2.next().value)//valor 2
console.log(g2.next().value)//valor 3
console.log(g2.next().value)//valor 4
console.log(g2.next().value)//valor 5
console.log(g2.next().value)//valor 6
console.log(g2.next().value)//valor 7
