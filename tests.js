

function busca (busca){

//Array de pokemons que vão vir da api
    const pokemons = [

        {
            id: 1,
            name:'chubisvaldo',
            class:'capoeirista'
        },
        {
            id: 2,
            name:'cris',
            class:'capoeirista e churrasqueiro'
        },

        {
            id: 3,
            name:'veio da havan',
            class:'empresario'
        },

        {
            id: 4,
            name:'travis scott',
            class:'trapper'
        },

        {
            id: 5,
            name:'rosquinha',
            class:'trapper'
        },

    ];
    const resultado = [];
    for (let i of pokemons){
        if (i.class.includes(busca)){

            resultado.push(i)
            
        }
    }
    

}
busca('trapper');

