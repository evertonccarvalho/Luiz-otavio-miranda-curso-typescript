let x = 10; // eslint-disable-line
x = 454656;

const y = 10;

const pessoa = {
  nome: 'everton' as const,
  sobrenome: 'carvalho'
};

function escolhaAAcor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaAAcor('Amarelo'));

//module mode
export default 1123;
