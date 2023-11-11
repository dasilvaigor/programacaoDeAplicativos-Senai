const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const button = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')
const msg = document.querySelector('#msg')

button.addEventListener('click', imc)

function imc() {

    let p = peso.value
    let a = Number(altura.value)
    let imc = p/(a*a)

    resultado.textContent = "IMC: " + imc.toFixed(2)

    if(imc < 18.5) {
        msg.innerText='Situação: Abaixo do peso'
    } else if(imc >= 18.5 && imc < 25) {
        msg.innerText='Situação: Peso ideal'
    } else if(imc >= 25 && imc < 30) {
        msg.innerText='Situação: Sobrepeso'
    } else if(imc >= 30 && imc < 35) {
        msg.innerText='Situação: Obesidade grau 1'
    } else if(imc >= 35 && imc < 40) {
        msg.innerText='Situação: Obesidade grau 2'
    } else {
        msg.innerText='Situação: Obesidade morbida'
    }
}