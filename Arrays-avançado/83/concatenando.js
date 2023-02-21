

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2, [8,86,967,'carlos']); ;//forma classica
const a4 = [...a1,...a2,...[8,86,967,'carlos']] //forma mais maneira utilizando o rest :D!
console.log(a3)
