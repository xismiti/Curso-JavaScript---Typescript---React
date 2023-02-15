

const nome = 'gui';

function falaNome(){
    console.log(nome) //toda função conhece as variaveis de seus vizinhos
}

function usaFalaNome(){
    falaNome()
}

usaFalaNome();//a função tenta buscar na função pai, caso não esteja ela vai no pai do pai ate achar a variavel, caso ela esteja no escopo global ou na bolha dela.
