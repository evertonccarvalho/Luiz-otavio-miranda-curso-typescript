export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  quantidadeProdutos(): number {
    return this.produtos.length;
  }
  valorTOtal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number
  ) {}
}

const produto1 = new Produto('camisa', 49.9);
const produto2 = new Produto('caneca', 19.9);
const produto3 = new Produto('caneta', 9.9);
const produto4 = new Produto('chinela', 29.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);

console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTOtal());
console.log(carrinhoDeCompras.quantidadeProdutos());
