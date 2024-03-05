export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'luiz', 30);
funcao.apply(new Date(), ['luiz', 30]);
