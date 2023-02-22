
//dobre os numeros
const numeros = [5,3,42,41,4,215415,1,23,1245543,3525,231412,5,3,4,1];

const num = numeros.map((i) => i*2 ); //map sempre vai ter o mesmo tamanho do array original



const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'maria', idade: 32},
    {nome: 'casf', idade: 55},
    {nome: 'uoiuo', idade: 19},
    {nome: 'dsada', idade: 23},
    {nome: 'jubileu', idade: 47},
];
//retorne apenas uma string com o nome da pessoa.
const nomes = pessoas.map((n)=> n.nome)
//retorne apenas a chave "idade" do objeto
const idade = pessoas.map((n) => ({idade: n.idade}));
console.log(idade)
//adicione uma chave id em cada objeto (id)

const comIds = pessoas.map((n,i)=> {
    n.id = i;
    return n;
});

console.log(comIds)

