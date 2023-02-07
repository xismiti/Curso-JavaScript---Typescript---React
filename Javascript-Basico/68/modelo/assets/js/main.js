

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', (e)=>{

    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }

})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}


function criaBotaoApagar(li){
    li.innerText += ' ';
    const   botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar')
}


function criaTarefa(textoInput){
    
    const list = document.createElement('li');
    list.innerText = textoInput;
    tarefas.appendChild(list);
    limpaInput();
    criaBotaoApagar(list);
    salvarTarefa();

}

btnTarefa.addEventListener('click', function(){
   if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)

});

document.addEventListener('click', function (e){

    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }

})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar',' ').trim(); //RETIRANDO A PALAVRA APAGAR DOS LI´S
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefas of listaDeTarefas){
        criaTarefa(tarefas)
    }
}

adicionaTarefasSalvas()
