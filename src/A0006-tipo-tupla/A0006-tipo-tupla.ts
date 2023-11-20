// tuple
const dadosCliente1: readonly [number, string] = [1, 'luiz'];
const dadosCliente2: [number, string, string] = [1, 'luiz', 'miranda'];
const dadosCliente3: [number, string, string?] = [1, 'luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'luiz', 'seila'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Joao';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//ReadyOnly array imutavel

const array1: readonly string[] = ['luiz', 'otavio'];
const array2: ReadonlyArray<string> = ['luiz', 'otavio'];

console.log(array1);
console.log(array2);
