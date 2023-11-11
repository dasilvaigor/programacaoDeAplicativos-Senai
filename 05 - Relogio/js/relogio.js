//DOM
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const mensagem = document.querySelector('#mensagem')

//EVENTO

const relogio = setInterval(tempo, 1000)

//FUNÇÃO

function tempo(){

    let dia = new Date() 

    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()

    if(hr < 10){
        hr = "0" + hr
    }
    if(min < 10){
        min = "0" + min
    }
    if(seg < 10){ 
        seg = "0" + seg
    }

    if(hr > 5 && hr < 12) {
        mensagem.innerText='Bom dia !!'
    } else if (hr > 12 && hr < 18) {
        mensagem.innerText='Boa tarde !!'
    } else {
        mensagem.innerText='Boa noite !!'
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
}