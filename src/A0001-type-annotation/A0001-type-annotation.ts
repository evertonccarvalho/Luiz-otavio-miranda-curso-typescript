/* eslint-disable */

//tipos basicos ( aqui ocorre a inferencia de tipos)
let nome: string = 'luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbol: symbol = Symbol('qualquer-symbol');

//arays
let arraysNumbers: Array<number> = [1, 2, 3];
let arraydStrings: Array<string> = ['1', '2', '3'];

let arraysNumbers2: number[] = [1, 2, 3];
let arraydStrings2: string[] = ['1', '2', '3'];

//objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Everton',
  idade: 32,
};

//funções

function soma(x: number, y: number) {
  return x + y;
}

let soma2: (x: number, y: number) => number = (x, y) => x + y;
