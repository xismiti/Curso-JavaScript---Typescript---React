
const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];


//nomes.splice(indice,delete,elem1,elem2,elem3);

//pop
nomes.splice(4,1,'LUIZ');//do indice 4 quero remover 1 elemento e adicionar 'LUIZ'. Ele retorna dois arrays um o array alterado, e outro os itens removidos do array.

console.log(nomes)