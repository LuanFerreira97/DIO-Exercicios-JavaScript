
// Exercicio de estrutura de condi��o.

// 1 - pre�o do etanol
// 2 - pre�o da gasolina
// 3 - tipo de combustivel
// 4 - consumo por km do carro
// 5 - distancia da viagem


const precoEtanol = 4.20;
const precoGasolina = 5.79;
const kmPorLitros = 11.5;
const distanciaEmKm = 1666;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoEtanol;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
    }

else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

console.log(valorGasto.toFixed(2));

