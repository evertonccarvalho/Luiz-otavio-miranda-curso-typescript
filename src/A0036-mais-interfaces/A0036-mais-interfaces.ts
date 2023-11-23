// Declaration Merging
interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  nome: string;
}
interface Pessoa {
  readonly enderecos: string[];
}
interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
  idade: 30
};

pessoa.enderecos.push('Rua NOVA');
console.log(pessoa);
