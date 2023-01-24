//capturar o evento de submit do formulário e prevenir ele.

const form = document.querySelector(".form");

form.addEventListener('submit' , function (event) { //O addEventListener voce define qual evento ele vai ficar monitorando e qual funcão vai acionar quando o evento acontecer (pode se criar a função dentro dele mesmo como fiz aqui)
 
    event.preventDefault(); //cancela o envio automatico do formulario

    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura') // usando o target a gente pega o input inteiro
    const peso = Number(inputPeso.value) //e aqui pegamos só o valor do input
    const altura = Number(inputAltura.value)

    if (!peso ) { // se o peso NÃO  for falso

        setResultado('peso Invalido', false)
        return // se nao tiver return a função não vai parar
    }
    if (!altura) { // se a altura NÃO  for falso

        setResultado('Altura Invalida', false)
        return
    }

    const imc = getImc(peso , altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC É ${imc} (${nivelImc})`

    setResultado(msg, true);
});

function getImc (peso, altura) {

    const imc = peso / altura ** 2; // formula do IMC
    return imc.toFixed(2) //retorna o IMC com duas casas deciamais fixas

}

function getNivelImc(imc){

    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // array de niveis de obesidade, feito pra se guiar pelos indices e puxar o resultado pelo imc.

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}

function criaP () { //função para criar um paragrafo

    const p = document.createElement('p');//cria um paragrafo
    p.classList.add() //cria uma classe nesse paragrafo, a qual podemos modificar o CSS de acordo com o resultado, mudando o background ou etc
    return p;

}

function setResultado (mensagem, isValid) {

    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''; //limpa a div   
    const p = criaP(); //recebe o paragrafo criado
    if (isValid) {
        p.classList.add('paragrafo-correct')

    } else {
        p.classList.add('paragrafo-wrong')
    };
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}



