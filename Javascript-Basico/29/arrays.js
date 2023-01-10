






//Indices         0        1       2
const alunos = ['Luiz', 'Maria','João']

alunos[0] = "Eduardo"; //Alterar o primeiro indice do array ou indice existente
alunos[3] = "Luiza"; //posso adicionar elementos criando indices que existiam.
alunos.push('Otavio'); //Adiciona um elemento ao final do array.
alunos.unshift('Carlos');//adiciona o elemnto no inicio e empurra todos os outros, no caso o 0 vira 1 e o 1 vira 2.
alunos.pop(); //remove o elemento do fim do array

const removido = alunos.pop(); // retira do final e salva o elemento retirado do array
alunos.shift(); //Remove o primeiro elemento do Array
alunos.slice(2, 4) //Fatia o array e mos os indices do inicio ao fim definido. no caso do indice 2 ate o 4.
alunos instanceof Array; //Retorna true se for um array ou false se não for


