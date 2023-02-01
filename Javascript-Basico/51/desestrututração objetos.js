

const pessoa = {

    nome: 'gui',
    sobrenome:'Schmidt',
    idade: 21,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }

}
//atribuição via desestruturação. Desse modo eu crio 3 variaveis e atribuo os valores dentro do obejto pessoa para cada uma que tiver o nome corespondente. Ex : nome vai atribuir o que estiver no atributo nome dentro da pessoa

const {nome, sobrenome, idade, endereco: {rua,numero} } = pessoa;

//para pegar atributos dentro de obejtos que estao dentro de outros objetos (no caso endereco), colocamos qual atributo ou variavel vamos procurar o valor, apos dois pontos e o que queremos extrair dela
