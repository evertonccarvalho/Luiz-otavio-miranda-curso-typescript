// Encademaneto opcional e operador de coalescencia nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'titulo',
  texto: 'texto'
  // data: new Date()
};

console.log(documento.data?.toDateString() ?? '1 ixi existe data.');
console.log(undefined ?? '2 ixi existe data.');
console.log(null ?? '3 ixi existe data.');
console.log(false ?? '4 ixi existe data.');
console.log(0 ?? '5 ixi existe data.');
console.log('' ?? '6 ixi existe data.');
