const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botao')
const valor = document.querySelector('#valor')

botao.addEventListener('click', calcular)

function calcular() {
    let d = Number(distancia.value)
    let r = Number(rendimento.value)
    let p = Number(preco.value)

    let calculo = (d/r) * p

    valor.innerText = "O valor gasto será de: " + calculo.toFixed(2)
}