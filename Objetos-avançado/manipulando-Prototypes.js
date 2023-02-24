


const objA = {
    chaveA: 'A'
}

const objB ={
    chaveB: 'B'
}

Object.setPrototypeOf(objB,objA);//agora o prototype de A é o mesmo de B
console.log(objB.chaveA);//ele tambem tem acesso as chaves do A