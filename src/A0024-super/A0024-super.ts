export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    const result = super.getNomeCompleto();
    return 'HEEYYY' + result;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem de cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('luiz', 'miranda', 30, '0000.000.00.0-11');
const aluno = new Aluno('luiz', 'miranda', 30, '0000.000.00.0-11', '0005');
const cliente = new Cliente('luiz', 'miranda', 30, '0000.000.00.0-11');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
