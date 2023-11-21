// utilizar unknown inves de any sempre que não souber oque a variavel vai ser com antecedencia
let x: unknown;

x = 100;
x = 'luiz';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
