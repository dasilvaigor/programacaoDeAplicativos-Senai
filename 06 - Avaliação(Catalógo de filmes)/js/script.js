const capa = document.querySelector('#capa')
const resumo = document.querySelector('#resumo')
const botao1 = document.querySelector('#botao1')
const botao2 = document.querySelector('#botao2')
const botao3 = document.querySelector('#botao3')
const botao4 = document.querySelector('#botao4')

botao1.addEventListener('click', filme1)
botao2.addEventListener('click', filme2)
botao3.addEventListener('click', filme3)
botao4.addEventListener('click', filme4)

function filme1() {
    capa.src="images/sociedade-dos-poetas-mortos.jfif"
    resumo.textContent="O novo professor de Inglês John Keating é introduzido a uma escola preparatória de meninos que é conhecida por suas antigas tradições e alto padrão. Ele usa métodos pouco ortodoxos para atingir seus alunos, que enfrentam enormes pressões de seus pais e da escola. Com a ajuda de Keating, os alunos Neil Perry, Todd Anderson e outros aprendem como não serem tão tímidos, seguir seus sonhos e aproveitar cada dia."
}
function filme2() {
    capa.src="images/o-poderoso-chefao.png"
    resumo.textContent="Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios."
}
function filme3() {
    capa.src="images/forrest-gump"
    resumo.textContent="Mesmo com o raciocínio lento, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce e perturbada Jenny."
}
function filme4() {
    capa.src="images/dez-coisas-que-odeio-em-voce.jpg"
    resumo.textContent="A situação está tensa na casa dos Stratford. Bianca (Larisa Oleynik) não vê a hora de arranjar um namorado, mas seu pai (Larry Miller) não permite que ela saia com garotos. Após muita insistência, o pai toma uma resolução: Bianca pode namorar, desde que sua irmã, Katharina (Julia Stiles), namore também."
}