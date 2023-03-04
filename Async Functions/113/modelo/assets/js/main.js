
axios('pessoas.json')
.then(resposta => carregaElemento(resposta.data))



function carregaElemento(dados){
    const table = document.createElement('table');
    const resultado = document.querySelector('.resultado')
    for(let pessoa of dados){
        const tr = document.createElement('tr');
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario;
        tr.appendChild(td)
        table.appendChild(tr)
    }
    resultado.appendChild(table)
}