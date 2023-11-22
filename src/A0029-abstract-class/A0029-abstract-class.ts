export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(pesonagem: Personagem): void {
    this.bordao();
    pesonagem.perderVida(this.ataque);
  }

  perderVida(foraAtaque: number): void {
    this.vida -= foraAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`
    );
  }

  abstract bordao(): void;
}

//
//
//

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' Guerreira atacando');
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ' Monstro Hauwheuahwuh');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
