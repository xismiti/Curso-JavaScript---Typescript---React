//? : Podem substituir o if e else em algumas ocasioes

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';// no caso se for true vai parar no "?" caso seja false vai para o ":". DEPOIS DO ? VEM A CONDIÇÃO VERDADEIRA E DEPOIS DO : É A CONDIÇÃO SE FOR FALSE.
const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //setando um valor padrao para a variavel, caso não tiver selecionado nada.



