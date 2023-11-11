const fotos = document.querySelector('#foto')
const haaland = document.querySelector('#haaland')
const cr7 = document.querySelector('#cr7')
const mbappe = document.querySelector('#mbappe')
const neymar = document.querySelector('#neymar')
const dybala = document.querySelector('#dybala')
const messi = document.querySelector('#messi')
const nome = document.querySelector("#nome")

haaland.addEventListener('click', mudarHalan)
cr7.addEventListener('click', mudarCr7)
mbappe.addEventListener('click', mudarMbappe)
neymar.addEventListener('click', mudarNeymar)
dybala.addEventListener('click', mudarDybala)
messi.addEventListener('click', mudarMessi)

function mudarHalan(){
    fotos.src= "images/haaland.png"
    nome.textContent= "Erling Haaland"
    
}

function mudarCr7(){
    fotos.src="images/cr7.jpg"
    nome.textContent= "Cristiano Ronaldo"
}

function mudarMbappe(){
    fotos.src="images/mbappe.jpg"
    nome.textContent= "Kylian Mbappé"
}

function mudarNeymar(){
    fotos.src="images/neymar.jpg"
    nome.textContent= "Neymar Jr."
}

function mudarDybala(){
    fotos.src="images/dybala.jpg"
    nome.textContent= "Paulo Dybala"
}

function mudarMessi(){
    fotos.src="images/messi.jpg"
    nome.textContent = "Lionel Messi"
}