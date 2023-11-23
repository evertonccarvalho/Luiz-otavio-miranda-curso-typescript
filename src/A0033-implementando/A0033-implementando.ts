type TipoNome = {
  nome: string;
};
type TipoSobrenome = {
  sobreNome: string;
};
type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobreNome: string
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobreNome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');

console.log(pessoa.nomeCompleto());
