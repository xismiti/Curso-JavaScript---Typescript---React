

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

function funcaoDoInterval(){
    console.log(mostraHora());
}


const timer = setInterval(funcaoDoInterval, 1000);//vai executar a função de acordo um intervalo definido. o tempo é definido em milisegundos

setTimeout(function(){
    clearInterval(timer);
}, 5000) // esse para a funcção de acordo com o tempo definido nesse caso 5 segundos.