export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }
  escrever(): void {
    if (this.ferramenta === null) {
      console.log('não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escitor = new Escritor('Everton');
const caneta = new Caneta('bic');
const maquinaEscrever = new MaquinaEscrever('Maquina de Escrever');

// console.log(escitor.nome);
// console.log(caneta.nome);
// console.log(maquinaEscrever.nome);

escitor.ferramenta = caneta;
escitor.ferramenta = maquinaEscrever;
escitor.escrever();
