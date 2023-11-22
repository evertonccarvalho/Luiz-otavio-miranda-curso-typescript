export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {
    this.cpf = _cpf; //pode fazer assim tbm
  }

  set cpf(valor: string) {
    console.log('setter Chamado');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('getter Chamado');

    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('luiz', 'miranda', 30, '0000.000.00.0-11');

pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
