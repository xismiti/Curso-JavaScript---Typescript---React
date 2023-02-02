let i = 0;// a variavel de controle é feita fora do loop

while (i <= 10){ //enquanto for verdadeiro o laço vai continuar

    console.log(i);

    i++; //IMPORTANTE COLOCAR PQ SE NÃO O LOOP FICA INFINITO E QUEBRA TUDO KKKKK

}

//USOS
function random(min ,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
} //função para gerar um numero random

let rand = random (1,50);

while (rand !== 10){ //enquanto o numero random for diferente de 10 o loop vai continuar;

    rand = random(1,50)//gerando um numero random de 1 a 50 e atualizando a variavel de controle.
    console.log(rand)

} // assim que sair 10 ele sai fora

do {

    console.log(rand);

} while (rand !==10) // o do while executa o codigo antes de verificar a variavel de controle



