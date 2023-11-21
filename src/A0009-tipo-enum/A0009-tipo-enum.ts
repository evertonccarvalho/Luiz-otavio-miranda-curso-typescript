enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200
}

enum Cores {
  ROXO = 'Roxo',
  VERDE = 201,
  ROSA
}

function escolhaAcor(cor: Cores): void {
  console.log(cor);
}

escolhaAcor(Cores.AMARELO);
escolhaAcor(Cores.ROXO);
escolhaAcor(Cores.ROSA);
