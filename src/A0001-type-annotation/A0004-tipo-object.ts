const objectA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valorA',
  chaveB: 'valorB'
};

objectA.chaveA = 'Outro valor';
objectA.chaveC = 'nova chave';
objectA.chaveD = 'chave D';

console.log(objectA);
