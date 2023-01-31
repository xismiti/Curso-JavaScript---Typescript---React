//criando uma função global pra isolar as variaveis do escopo global do programa
function date (){

    //pegando o H1 do html e trazendo pra ca com o ID dele

    const title = document.querySelector("#title");

    //criando um objeto date
    const date = new Date();
    
    //criando um objeto data com a data atual
    const thisDate = {

        dia: date.getDate(),
        hora: date.getHours(),
        mes: date.getMonth(),
        ano: date.getFullYear(),
        diaSemana:''
    }


    //criando um switch case para definir qual dia da semana é 
    const weekend= date.getDay();

    //switch que define o dia da semana e joga no objeto date

    switch (weekend){

        case 0:
            thisDate.diaSemana = 'Domingo';
            break;
        case 1:
            thisDate.diaSemana = 'Segunda';
            break;
        case 2:
            thisDate.diaSemana = 'Terça';
            break;
        case 3:
            thisDate.diaSemana = 'Quarta';
            break;
        case 4:
            thisDate.diaSemana = 'Quinta';
            break;
        case 5:
            thisDate.diaSemana = 'Sexta';
            break;
        case 6:
            thisDate.diaSemana = 'Sabado';
            break;
    }
    //Jogando tudo pro h1 no html

    title.innerHTML =` ${thisDate.diaSemana}, ${thisDate.dia} de ${thisDate.mes} de ${thisDate.ano} <br> ${thisDate.hora}`



}

date();