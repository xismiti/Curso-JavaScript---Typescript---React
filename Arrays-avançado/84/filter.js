
//retorne os numeros maiores que 10
const numeros = [5,3,42,41,4,215415,1,23,1245543,3525,231412,5,3,4,1];


const numerosFiltrados = numeros.filter((valor,indice,array) =>{

    console.log(`${valor}------------ ${indice}`)
    return valor > 10;//retorna verdadeiro ou falso direto.
});
console.log(numerosFiltrados)

//Filter -> vai sempre retornar um array com a mesma quantidade de elementos ou menos.


//Retorne as pessoas que tem o Nome com 5 letras ou maias
//Retorne as pesssoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com A

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 32},
    {nome: 'casf', idade: 55},
    {nome: 'uoiuo', idade: 19},
    {nome: 'dsada', idade: 23},
    {nome: 'jubileu', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter((valor) => {

    return valor.nome.length >= 5


})

console.log(pessoasComNomeGrande);

const pessoasVelhas = pessoas.filter((valor) => {

    return valor.idade > 50;


})

const nomesLetraA = pessoas.filter((valor) => {

    return valor.nome.toLowerCase().endsWith('a');

})