function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavios',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

semRetorno('luiz', 'otavios');
pessoa.exibirNome();

export { pessoa };
