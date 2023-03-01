//Promise metodos
Promise.all;
Promise.race;
Promise.resolve;
Promise.reject;

function esperaAi(msg ,tempo){
    return new Promise ((resolve, reject) => {
        
        setTimeout(()=> {
            resolve(msg.toUpperCase() + " - Passei na promise");
        },tempo)

        
    })
}


const promises = [
    'Primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 340),
    esperaAi('promise 1', 600),
    'Outro valor'
];
Promise.all(promises)
    .then((valor)=>{
        console.log(valor)
    })