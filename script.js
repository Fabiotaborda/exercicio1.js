alert('escolha dois numeros')
let number1 = prompt('qual o primeiro numero?')
let number2 = prompt('qual o segundo numero?')
number1 = Number(number1)
number2 = Number(number2)
let evenNumber= (number1 + number2)%2

alert(`a soma dos dois numeros é ${number1 + number2}`)
alert(`a subtração dos dois numeros é ${number1 - number2}`)
alert(`a multiplicação dos dois numeros é ${number1 * number2}`)
alert(`a divisãp dos dois numeros é ${(number1 / number2).toFixed(2)}`)
alert(`o resto da divisão dos dois numeros é ${number1 % number2}`)

if(evenNumber == 0){ 
    alert(`a soma dos dois numeros é par`) 
} else {
    alert('a soma dos dois numeros é impar')
}

if(number1 != number2){ 
    alert(`os dois numeros escolhidos são diferentes`) 
} else {
    alert('os dois numeros escolhidos são iguais')
}