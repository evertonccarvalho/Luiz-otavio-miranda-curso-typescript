interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobreNome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobreNome: string
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobreNome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    {
      return this.nome + ' ' + this.sobreNome;
    }
  },
  nome: 'everton',
  sobreNome: 'carvalho'
};

const pessoa = new Pessoa('Luiz', 'Miranda');

console.log(pessoa.nomeCompleto());

console.log(pessoaObj);
