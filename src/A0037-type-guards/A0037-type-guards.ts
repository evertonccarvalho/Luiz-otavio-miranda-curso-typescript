export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function monstraNome(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  if (obj instanceof Aluno) console.log(obj.nome);
}

monstraNome(new Aluno('joao'));
