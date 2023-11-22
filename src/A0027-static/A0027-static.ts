export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  methodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('luiz', 'miranda', 30, '0000.000.00.0-11');
const pessoa2 = Pessoa.criaPessoa('luiz', 'miranda');

console.log(pessoa1);
console.log(pessoa2);
pessoa1.methodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
