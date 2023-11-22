export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Everton', 'Carvalho');
const colaborador2 = new Colaborador('Maria', 'Carvalho');
const colaborador3 = new Colaborador('Aizen', 'Carvalho');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

const colaboradorREmovido = empresa1.popColaborador();
console.log(colaboradorREmovido);
console.log(empresa1);
