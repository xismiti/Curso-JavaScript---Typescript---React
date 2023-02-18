

function recursiva(max){
    if (max >= 10) return;
    max++;
    console.log(max)
    recursiva(max)
}
recursiva(1)

//é uma função que se chama, uma especie de loop, porem tem limites de iterações de acordo a engine.