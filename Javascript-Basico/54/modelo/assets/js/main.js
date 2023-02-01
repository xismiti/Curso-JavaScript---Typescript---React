

const elementos = [

    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'}
];


const container = document.querySelector('.container');
const div = document.createElement('div'); //criando uma div a qual vai receber as tags e o s textos, feita pra depois adicionar tudo de uma vez so no html

for (let i = 0; i < elementos.length; i++){ //laço percorrendo o array
    let {tag, texto} = elementos [i]; //desestruturando e criando duas variaveis que vao atribuir os atributos do array a cada iteração
    let elemento = document.createElement(tag); //criando um elemento o qual vai receber a tag iterada
    elemento.innerHTML = texto; //adicionando o texto ao elemento
    div.appendChild(elemento); // por fim adicionando o elemento a div criada 
}

container.appendChild(div); //mandando a div finalizada par o Html