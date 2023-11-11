const liga = document.querySelector('#liga')
const desliga = document.querySelector('#desliga')
const lampada = document.querySelector('#lampada')

liga.addEventListener('click', ligando)
desliga.addEventListener('click', desligando)
lampada.addEventListener('click', quebraLampada)

function ligando() {
    lampada.src='images/lampada-acesa.gif'
}

function desligando() {
    lampada.src='images/lampada-apagada.gif'
}

function quebraLampada() {
    lampada.src='images/lampadaquebrada.jpg'
}