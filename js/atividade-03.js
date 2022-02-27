let binario = prompt('Digite o número desejado: ')
let decimal = 0;
let potencia = 0;

for(let i = binario.length -1; i >= 0; --i) {
  decimal = decimal + Math.pow(2, potencia) * parseInt(binario.charAt(i));
  potencia++;
}
alert(`O número decimal equivalente a binário é: ${decimal}`);