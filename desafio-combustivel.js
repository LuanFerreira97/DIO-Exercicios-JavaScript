

const precoCombustivel = 5.79;
const kmPorLitros = 11.5;
const distanciaEmKm = 1666;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
