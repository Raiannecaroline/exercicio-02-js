let numQuant = parseFloat(prompt('Digite a quantidade de números: '))
console.log(`Mostre a quantidade de números ${numQuant}`)

let numero = []

for(let i = 0; i < numQuant; i++) {
  numero[i] = parseFloat(prompt(`Digite o ${i+1}° número`))
}

let somar = numero.reduce(function(somar, i){
  return somar + i;
})
console.log(`A soma dos números é ${somar}`)

let media = somar / numero.length
console.log(`A média é igual a ${media}`)

let raizC = Math.cbrt(numero[0])
console.log(`A Raiz Cúbica é igual a ${raizC}`)

let raizQ = Math.sqrt(numero[0])
console.log(`A Raiz Quadrada é igual a ${raizQ}`)

for(let j = 0; j < numero.length; j++){
  numero[j] **= 2
  console.log(`A potência é igual a ${numero[j]}`)
}