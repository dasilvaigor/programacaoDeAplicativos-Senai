const chave = '55e5859620b55dd666daddfb382badfc'
const cidade = document.querySelector('.input-cidade') // Campo de pesquisa
const botao = document.querySelector('.botao-busca') // Lupa para pesquisa
const titulo = document.querySelector('.cidade') // Area com o nome da cidade
const temperatura = document.querySelector('.temp') // Area com a temperatura
const previsao = document.querySelector('.texto-previsao') // Area com a previsão

botao.addEventListener('click', buscarCidade)

async function buscarCidade(){
    let ncidade = cidade.value
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ncidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta=>resposta.json())
    /* COMANDO FETCH PARA SOLICITAR DADOS A API
    `` CRASES REPRESETAM TEMPLATES
    .then(variável temporária => variável temporária .json()) solicita a tradução dos dados para uma
    liguagem universal */
    
    titulo.textContent = "Tempo em " + dados.name
    temperatura.textContent = Math.ceil(dados.main.temp) + "°c" // Math.ceil = Parte inteira
    previsao.textContent = dados.weather[0].description  

    console.log(dados)
}