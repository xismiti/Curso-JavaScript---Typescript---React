//EM ASCII
//48 - 68 = NUMEROS
//65 - 90 = letras maiuscuclas
//97 - 122 = letras minusculas
//48 - 57 = numeros
//ps: a função rand n adiciona o ultimo numero por isso colocamos mais um

const rand =  (min,max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinusculas = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = ".,;^!`{}^:<%$#@&¨*";
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];
    


export default function geraSenha (qtd, maiuscuclas, minusculas,numeros,simbolos){

    const senhaArray =[];
    qtd = Number(qtd)
    for(let i = 0; i < qtd; i++){
        maiuscuclas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}